/// <reference path="../../typings/TextHighlighter.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const document_service_1 = require('./document.service');
const comment_service_1 = require('./comment.service');
const highlight_service_1 = require('./highlight.service');
const comment_1 = require('./comment');
const router_deprecated_1 = require('@angular/router-deprecated');
const common_2 = require('@angular/common');
let DocumentReaderComponent = class DocumentReaderComponent {
    constructor(documentService, commentService, highlightService, routeParams, renderer) {
        this.documentService = documentService;
        this.commentService = commentService;
        this.highlightService = highlightService;
        this.routeParams = routeParams;
        this.renderer = renderer;
    }
    editComment(comment) {
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
                let top = window.getSelection().getRangeAt(0).getBoundingClientRect().top
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
    removeComment(id) {
        this.commentService.removeComment(id);
        this.updateComments();
    }
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.documentService.getDocument(id)
            .then(doc => {
            this.document = doc;
            this.commentService.getComments(this.document.id)
                .then(comments => this.comments = comments);
        });
        this.highlightService.getHighlights(0) // TODO: add user id
            .then(highlights => this.highlights = highlights);
        this.tempComment = new comment_1.Comment(-1, "", "", 100);
        this.showCommentEditor = false;
        this.addCommentLeft = '1123px';
        this.addCommentTop = '100px';
        this.addCommentVisibility = 'visible';
        this.firstLoad = true;
    }
    ngAfterViewChecked() {
        console.log("View checked");
        if (this.txtPresenter != undefined && this.firstLoad) {
            console.log('HEUREKAAAAAA!!!!!');
            this.globalListenSelectionChange = this.renderer.listenGlobal('document', 'selectionchange', (event) => {
                console.log(event);
                if (event.path[1].getSelection() != 0 &&
                    this.isPartOfDocument(event.path[1].getSelection().getRangeAt(0)) &&
                    this.isRealSelection(event.path[1].getSelection().getRangeAt(0))) {
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
    isRealSelection(sel) {
        return sel.toString().length > 0;
    }
    isPartOfDocument(sel) {
        return this.txtPresenter.nativeElement.contains(sel.commonAncestorContainer);
    }
    hideAddCommentButton() {
        this.addCommentVisibility = 'hidden';
    }
    moveAddCommentButton(range) {
        this.addCommentVisibility = 'visible';
        this.addCommentTop = (range.getBoundingClientRect().top - 60) + 'px';
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
            .then(comments => this.comments = comments);
    }
    initHighlighter(color) {
        if (this.hltr == undefined) {
            if (this.document.mimetype == 'text/plain') {
                this.hltr = new TextHighlighter(this.txtPresenter.nativeElement, { color: color });
                this.hltr.unbindEvents();
            }
        }
    }
    highlightButtonPressed(highlight) {
        this.initHighlighter(highlight.color);
        // TODO: should only check for range in the document presenter
        if (window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).toString() != "") {
            // A range is selected, highlight it
            this.hltr.setColor(highlight.color);
            this.hltr.doHighlight(); // Normalize?
            return;
        }
        else {
            // No range is selected (Un)bind events and highlight on mouseup/touchend (setting up auto highlighting)
            if (highlight.auto) {
                this.hltr.unbindEvents();
                highlight.auto = false;
            }
            else {
                this.hltr.setColor(highlight.color);
                this.hltr.bindEvents();
                this.highlights.forEach(hl => hl.auto = false);
                highlight.auto = true;
            }
        }
    }
};
__decorate([
    core_1.ViewChild('txt_presenter'), 
    __metadata('design:type', Object)
], DocumentReaderComponent.prototype, "txtPresenter", void 0);
__decorate([
    core_1.ViewChild('comment_column'), 
    __metadata('design:type', Object)
], DocumentReaderComponent.prototype, "commentColumn", void 0);
DocumentReaderComponent = __decorate([
    core_1.Component({
        //selector: 'document-list',
        providers: [document_service_1.DocumentService, comment_service_1.CommentService, highlight_service_1.HighlightService],
        templateUrl: '../../views/document-reader.html',
        styleUrls: ['../../styles/document-reader.css'],
        directives: [common_2.NgIf, common_1.FORM_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [document_service_1.DocumentService, comment_service_1.CommentService, highlight_service_1.HighlightService, router_deprecated_1.RouteParams, core_1.Renderer])
], DocumentReaderComponent);
exports.DocumentReaderComponent = DocumentReaderComponent;
//# sourceMappingURL=document-reader.component.js.map