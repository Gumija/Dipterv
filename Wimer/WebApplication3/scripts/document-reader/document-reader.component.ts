/// <reference path="../../typings/TextHighlighter.d.ts" />

import {Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, ViewChild, Renderer} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {DocumentService} from './document.service';
import {CommentService} from './comment.service';
import {HighlightService} from './highlight.service';
import {Document} from './document';
import {Comment} from './comment';
import {Highlight} from './highlight';
import { RouteParams } from '@angular/router-deprecated';
import {NgIf} from '@angular/common';


@Component({
    //selector: 'document-list',
    providers: [DocumentService, CommentService, HighlightService],
    templateUrl: '../../views/document-reader.html',
    styleUrls: ['../../styles/document-reader.css'],
    directives: [NgIf, FORM_DIRECTIVES]
})
export class DocumentReaderComponent implements OnInit, OnDestroy, AfterViewChecked {

    document: Document;
    comments: Comment[];
    highlights: Highlight[];
    tempComment: Comment;
    showCommentEditor: boolean;
    hltr: any;
    addCommentVisibility: string;
    addCommentLeft: string;
    addCommentTop: string;
    firstLoad: boolean;
    firstSelectionDone: boolean;

    globalListenSelectionChange: Function;

    @ViewChild('txt_presenter') txtPresenter;
    @ViewChild('comment_column') commentColumn;
    @ViewChild('document_column') documentColumn;

    constructor(
        private documentService: DocumentService,
        private commentService: CommentService,
        private highlightService: HighlightService,
        private routeParams: RouteParams,
        private renderer: Renderer
    ) { }

    editComment(comment: Comment) {
        this.tempComment.id = comment.id;
        this.tempComment.title = comment.title;
        this.tempComment.content = comment.content;
        this.tempComment.top = comment.top;
        this.showCommentEditor = true;
    }

    addComment() {
        if (window.getSelection()) {
            if (window.getSelection().getRangeAt(0)) {
                this.resetTempComment();
                let top =
                    window.getSelection().getRangeAt(0).getBoundingClientRect().top
                    - this.commentColumn.nativeElement.getBoundingClientRect().top;
                this.tempComment.top = top;
                this.showCommentEditor = true;
            }
        }
        this.updateComments();
    }

    saveComment() {
        if (this.tempComment.id == -1) {
            this.commentService.addComment(this.tempComment, this.document.id);
        }
        else {
            this.commentService.updateComment(this.tempComment);
        }
        this.resetTempComment();
        this.showCommentEditor = false;
        this.updateComments();
    }

    cancelComment() {
        this.resetTempComment();
        this.showCommentEditor = false;
    }

    removeComment(id: number) {
        this.commentService.removeComment(id);
        this.updateComments();
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.documentService.getDocument(id)
            .then(
            doc => {
                this.document = doc;
                this.commentService.getComments(this.document.id)
                    .then(
                    comments => this.comments = comments
                    )
            }
            );
        this.highlightService.getHighlights(0) // TODO: add user id
            .then(
            highlights => this.highlights = highlights
            )

        this.tempComment = new Comment(-1, "", "", 100);
        this.showCommentEditor = false;

         // this.addCommentLeft = '1123px'; 
        this.addCommentTop = '100px';
        this.addCommentVisibility = 'hidden';

        this.firstLoad = true;
        this.firstSelectionDone = false;
    }
    ngAfterViewChecked() {
        console.log("View checked");
        if (this.txtPresenter != undefined && this.firstLoad) {
            this.globalListenSelectionChange = this.renderer.listenGlobal('document', 'selectionchange', (event) => {
                console.log(event);
                this.firstSelectionDone = true;
                if (event.path[1].getSelection() != 0 &&                                  // event.path[1] is the window. Highlighing removes selection, might go to NPE here with getRangeAt(0)
                    this.isPartOfDocument(event.path[1].getSelection().getRangeAt(0)) &&  // event.path[1] is the window
                    this.isRealSelection(event.path[1].getSelection().getRangeAt(0))) {   // test for a single click
                    this.moveAddCommentButton(event.path[1].getSelection().getRangeAt(0));
                }
                else {
                    this.hideAddCommentButton();
                }
            });
            this.firstLoad = false;
        }
        //this.hltr = new TextHighlighter(txtPresenter);
    }

    isRealSelection(sel: Selection) {
        return sel.toString().length > 0;
    }

    isPartOfDocument(sel): boolean {
        return this.txtPresenter.nativeElement.contains(sel.commonAncestorContainer);
    }

    hideAddCommentButton() {
        this.addCommentVisibility = 'hidden';
    }

    moveAddCommentButton(range: Range) {
        this.addCommentVisibility = 'visible';
        this.addCommentTop = (range.getBoundingClientRect().top - 
            this.documentColumn.nativeElement.getBoundingClientRect().top) + 'px';
    }

    ngOnDestroy() {
        // Removes "listenGlobal" listener
        this.globalListenSelectionChange();
    }

    resetTempComment() {
        this.tempComment.id = -1;
        this.tempComment.title = "";
        this.tempComment.content = "";
    }

    updateComments() {
        this.commentService.getComments(this.document.id)
            .then(
            comments => this.comments = comments
            );
    }

    initHighlighter(color: string) {
        if (this.hltr == undefined) {
            if (this.document.mimetype == 'text/plain') {
                this.hltr = new TextHighlighter(this.txtPresenter.nativeElement, { color: color });
                this.hltr.unbindEvents();
            }
        }
    }

    highlightButtonPressed(highlight: Highlight) {
        this.initHighlighter(highlight.color);

        // TODO: should only check for range in the document presenter
        if (window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).toString() != "") {
            // A range is selected, highlight it
            this.hltr.setColor(highlight.color);
            this.hltr.doHighlight(); // Normalize?
            return;
        } else {
            // No range is selected (Un)bind events and highlight on mouseup/touchend (setting up auto highlighting)
            if (highlight.auto) {
                this.hltr.unbindEvents();
                highlight.auto = false;
            } else {
                this.hltr.setColor(highlight.color);
                this.hltr.bindEvents();
                this.highlights.forEach(hl => hl.auto = false);
                highlight.auto = true;
            }
        }
    }
}