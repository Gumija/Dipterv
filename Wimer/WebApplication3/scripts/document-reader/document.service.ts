import {Injectable} from '@angular/core';
import {Document} from './document';

@Injectable()
export class DocumentService {
    constructor() {

    }

    getDocument(id: number): Promise<Document> {
        return Promise.resolve(documents.filter(doc => doc.id == id)[0]);
    }
}

var documents = [
    new Document(1, 'Simple text file', 'text/plain',
        '\
\n                                 Apache License\
\n                           Version 2.0, January 2004\
\n                        http://www.apache.org/licenses/\
\n\
\n   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\
\n\
\n   1. Definitions.\
\n\
\n      "License" shall mean the terms and conditions for use, reproduction,\
\n      and distribution as defined by Sections 1 through 9 of this document.\
\n\
\n      "Licensor" shall mean the copyright owner or entity authorized by\
\n      the copyright owner that is granting the License.\
\n\
\n      "Legal Entity" shall mean the union of the acting entity and all\
\n      other entities that control, are controlled by, or are under common\
\n      control with that entity. For the purposes of this definition,\
\n      "control" means (i) the power, direct or indirect, to cause the\
\n      direction or management of such entity, whether by contract or\
\n      otherwise, or (ii) ownership of fifty percent (50%) or more of the\
\n      outstanding shares, or (iii) beneficial ownership of such entity.\
\n\
\n      "You" (or "Your") shall mean an individual or Legal Entity\
\n      exercising permissions granted by this License.\
\n\
\n      "Source" form shall mean the preferred form for making modifications,\
\n      including but not limited to software source code, documentation\
\n      source, and configuration files.\
\n\
\n      "Object" form shall mean any form resulting from mechanical\
\n      transformation or translation of a Source form, including but\
\n      not limited to compiled object code, generated documentation,\
\n      and conversions to other media types.\
\n\
\n      "Work" shall mean the work of authorship, whether in Source or\
\n      Object form, made available under the License, as indicated by a\
\n      copyright notice that is included in or attached to the work\
\n      (an example is provided in the Appendix below).\
\n\
\n      "Derivative Works" shall mean any work, whether in Source or Object\
\n      form, that is based on (or derived from) the Work and for which the\
\n      editorial revisions, annotations, elaborations, or other modifications\
\n      represent, as a whole, an original work of authorship. For the purposes\
\n      of this License, Derivative Works shall not include works that remain\
\n      separable from, or merely link (or bind by name) to the interfaces of,\
\n      the Work and Derivative Works thereof.\
\n\
\n      "Contribution" shall mean any work of authorship, including\
\n      the original version of the Work and any modifications or additions\
\n      to that Work or Derivative Works thereof, that is intentionally\
\n      submitted to Licensor for inclusion in the Work by the copyright owner\
\n      or by an individual or Legal Entity authorized to submit on behalf of\
\n      the copyright owner. For the purposes of this definition, "submitted"\
\n      means any form of electronic, verbal, or written communication sent\
\n      to the Licensor or its representatives, including but not limited to\
\n      communication on electronic mailing lists, source code control systems,\
\n      and issue tracking systems that are managed by, or on behalf of, the\
\n      Licensor for the purpose of discussing and improving the Work, but\
\n      excluding communication that is conspicuously marked or otherwise\
\n      designated in writing by the copyright owner as "Not a Contribution."\
\n\
\n      "Contributor" shall mean Licensor and any individual or Legal Entity\
\n      on behalf of whom a Contribution has been received by Licensor and\
\n      subsequently incorporated within the Work.\
\n\
\n   2. Grant of Copyright License. Subject to the terms and conditions of\
\n      this License, each Contributor hereby grants to You a perpetual,\
\n      worldwide, non-exclusive, no-charge, royalty-free, irrevocable\
\n      copyright license to reproduce, prepare Derivative Works of,\
\n      publicly display, publicly perform, sublicense, and distribute the\
\n      Work and such Derivative Works in Source or Object form.\
\n\
\n   3. Grant of Patent License. Subject to the terms and conditions of\
\n      this License, each Contributor hereby grants to You a perpetual,\
\n      worldwide, non-exclusive, no-charge, royalty-free, irrevocable\
\n      (except as stated in this section) patent license to make, have made,\
\n      use, offer to sell, sell, import, and otherwise transfer the Work,\
\n      where such license applies only to those patent claims licensable\
\n      by such Contributor that are necessarily infringed by their\
\n      Contribution(s) alone or by combination of their Contribution(s)\
\n      with the Work to which such Contribution(s) was submitted. If You\
\n      institute patent litigation against any entity (including a\
\n      cross-claim or counterclaim in a lawsuit) alleging that the Work\
\n      or a Contribution incorporated within the Work constitutes direct\
\n      or contributory patent infringement, then any patent licenses\
\n      granted to You under this License for that Work shall terminate\
\n      as of the date such litigation is filed.'
    ),
    new Document(2, 'Paragraphs after image (HTML)', 'text/html',
        '<img src="images/altpic.jpg" /> \
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut eros mi, egestas nec ante sed, laoreet tincidunt massa.Maecenas venenatis dui nec auctor rhoncus.Sed sed elementum libero.In placerat vestibulum posuere.Aenean erat nunc, efficitur non imperdiet vitae, ultrices vitae arcu.Cras facilisis nulla et ex semper, vel porttitor risus cursus.Fusce at mi vel mauris feugiat luctus.Cras sagittis, nibh eu porttitor maximus, ex urna egestas ipsum, ut elementum eros dolor non eros.Donec varius commodo justo, accumsan porta urna commodo ut.Nulla fermentum justo ut ex mattis placerat.Phasellus porttitor arcu eget malesuada ornare.Aliquam et ipsum malesuada, porta libero et, ullamcorper risus.Vivamus sit amet sapien id lectus euismod fermentum.Suspendisse vel ante elit.Fusce rhoncus fermentum urna, in sollicitudin sem pellentesque eget.</p>\
        <p>Duis ut massa congue, venenatis nulla ac, ornare lectus.Vivamus et leo non ipsum mollis porttitor quis a libero.Mauris ullamcorper ante risus.Donec nec orci accumsan, placerat lorem non, euismod libero.Phasellus augue justo, ornare non tincidunt id, tempor sed ipsum.Praesent eu urna luctus, rutrum tellus eu, sollicitudin justo.Phasellus pulvinar lectus orci, ac egestas lectus fermentum id.Maecenas volutpat, mauris ut viverra mattis, tellus lectus tempor diam, non mattis odio nisi nec ex.Cras congue id urna et efficitur.Etiam mattis vestibulum egestas.Donec ultrices, libero quis condimentum commodo, orci tortor ultrices mauris, quis consequat tortor justo id ex.Pellentesque tempus volutpat risus eu malesuada.Donec sem diam, sollicitudin vel orci ut, fermentum efficitur sem.Aliquam erat volutpat.Fusce non mollis sem.</p>\
        <p>Ut dignissim risus sit amet lectus porta porta id et justo.Cras scelerisque vehicula tincidunt.Aenean vulputate augue non dui hendrerit semper.Nunc auctor in purus a placerat.Aliquam in odio dignissim, egestas purus vel, vehicula est.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Integer eget neque ac urna feugiat cursus.Mauris finibus bibendum nibh, a consectetur dui cursus a.Ut sit amet libero pharetra, sollicitudin dui sit amet, hendrerit justo.Aliquam ac iaculis augue.Quisque eu orci vel turpis porttitor faucibus a in magna.Vivamus quis nisl sit amet ante rutrum feugiat.Sed ornare sit amet magna sit amet facilisis.Donec porta dolor lacus, quis fermentum sapien dignissim nec.Vivamus sed nulla ac arcu iaculis imperdiet.</p>\
        <p>Quisque sodales, ante vitae consectetur euismod, lorem felis ornare augue, ut aliquam tortor purus at lacus.Aliquam sollicitudin posuere odio nec vehicula.Quisque at faucibus metus, ac accumsan nibh.Suspendisse id mattis neque.Nunc est nibh, iaculis at purus et, imperdiet convallis odio.Nullam nec eleifend mi, et auctor ligula.Donec iaculis orci a arcu hendrerit, ac malesuada mauris gravida.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Proin vel elit vehicula, molestie turpis id, posuere leo.In facilisis molestie justo id fringilla.Praesent semper neque et aliquam aliquet.Maecenas semper sit amet turpis a aliquam.In quam lectus, euismod et volutpat vitae, elementum et urna.Nullam eget mauris lorem.</p>\
        <p>Nunc at nibh dignissim, malesuada lorem nec, ornare nibh.Nunc eleifend ex sed orci luctus pellentesque.Integer dapibus molestie turpis, ac iaculis massa ornare sed.Suspendisse efficitur eget nunc id suscipit.Proin tristique odio eget bibendum malesuada.Vestibulum ornare congue velit ac elementum.Suspendisse et interdum mi.Fusce eget arcu sit amet tellus dignissim euismod quis auctor erat.Fusce sit amet vehicula massa.Phasellus bibendum tempor diam, eget semper sapien dignissim non.Praesent interdum mollis mauris, sed aliquet nisi rutrum eget.Vestibulum vel metus vitae orci rutrum cursus.</p>\
        <p>Nulla congue urna et sem interdum imperdiet.Cras nisl urna, interdum vel hendrerit molestie, dictum ut nibh.Quisque sit amet congue nibh, ut varius ipsum.Nam turpis lacus, sagittis ut augue non, convallis mattis massa.Interdum et malesuada fames ac ante ipsum primis in faucibus.Vivamus scelerisque sapien et euismod aliquet.In dignissim nibh in magna venenatis molestie.</p>\
        <p>Nunc quis dignissim ipsum, eu laoreet ligula.Suspendisse at ligula blandit, pharetra est at, tempus lectus.Praesent nec placerat turpis, nec sollicitudin elit.Suspendisse sit amet pellentesque lorem, et placerat nisi.Nam ac tempor velit, a ullamcorper tortor.Curabitur eget ultrices quam.Aliquam cursus pulvinar diam vel rhoncus.</p>\
        <p>Nullam semper pellentesque aliquam.Donec laoreet, diam eget dignissim sollicitudin, ex velit feugiat dui, eget sagittis tellus eros iaculis orci.Fusce efficitur aliquam pulvinar.Aenean gravida aliquet urna, eu gravida elit egestas vitae.Morbi sit amet aliquam metus.Nam pharetra id arcu sit amet accumsan.Maecenas lacus quam, scelerisque viverra ante at, pulvinar placerat mi.Mauris tincidunt viverra libero et convallis.Curabitur gravida, orci a egestas egestas, arcu orci scelerisque nisl, ac molestie nunc nisl sit amet sem.Phasellus blandit euismod malesuada.Quisque ex nulla, venenatis eu dapibus et, accumsan eu nibh.Duis interdum vehicula lorem, ut molestie lectus ultrices nec.</p>\
        <p>Aenean blandit erat velit, a posuere felis vestibulum a.Etiam lacus metus, gravida condimentum neque a, pretium lacinia lorem.Phasellus varius tincidunt ipsum vitae elementum.Maecenas a feugiat augue.Curabitur in aliquet magna.Nulla et dui purus.Sed elementum diam erat, et sodales ipsum aliquam sit amet.Sed ligula leo, imperdiet sed sapien sed, sodales varius est.Nam eu fringilla elit.</p>\
        <p>Vivamus vitae enim mauris.Integer viverra vel leo sed condimentum.Suspendisse ut ex eu justo accumsan eleifend.Vestibulum ac sem sit amet nulla euismod interdum.Fusce elementum, arcu vel faucibus viverra, ante ex molestie purus, ac vestibulum felis magna quis nibh.Suspendisse lorem eros, vestibulum in congue quis, semper quis metus.Cras maximus tellus elementum ipsum mattis, a venenatis nisi laoreet.Morbi varius consequat rutrum.</p>'
    ),
    new Document(3, 'Dragon Burning Cities Again', 'text/plain',
        'Here comes the sun to take the dragons to burn the cities.'
    ),
    new Document(4, 'Empty image path 2.0', 'text/plain',
        'Here comes the sun to take the dragons to burn the cities.'
    ),
    new Document(5, 'Cities Burning Dragon', 'text/plain',
        'Here comes the sun to take the dragons to burn the cities.'
    ),
    new Document(6, 'Burning Dragon Cities', 'text/plain',
        'Here comes the sun to take the dragons to burn the cities.'
    )
];
