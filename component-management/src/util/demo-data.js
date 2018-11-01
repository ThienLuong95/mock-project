let projects = [
    {
        projectName: 'Open Ecosystem Network',
        projectId: 'pj1',
        projectHeadTag: "<meta charset=\"utf-8\">\n" +
            "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
        projectLinks: ["http://localhost:8080/static/open/css/style.css"],
        projectScripts: ["https://code.jquery.com/jquery-3.3.1.min.js","http://localhost:8080/static/open/open.js"],

        listComponents: [
            {
                id: 'cmp0',
                name: 'Nokia Button',
                template: "<div id=\"demo\">\n" +
                    "<nokia-button :text=\"text\"></nokia-button>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       text:'Hello'\n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp1',
                name: 'Nokia Hero',
                template: "<div id=\"demo\">\n" +
                    "  <nokia-hero\n" +
                    "    category='Project'          \n" +
                    "    title=\"Collaboration Workspace\"\n" +
                    "    subtitle='This is subtitle'\n" +
                    "\tcontent_color=''\n" +
                    "    :image=\"image\" \n" +
                    "\t:directory=\"directory\">\n" +
                    "  </nokia-hero>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "        image:'http://localhost:8080/static/open/images/hero_default.png',\n" +
                    "        directory:'static/open',\n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp2',
                name: 'Nokia Header',
                template: "<div id=\"demo\">\n" +
                    "  <nokia-header \n" +
                    "  title=\"To day we change to morrow\" \n" +
                    "  :image=\"image\"\n" +
                    "  subtitle='Welcome to the hub of open collaboration and innovation'\n" +
                    "  created=\"25/12/2017\"\n" +
                    "  :page=\"page\"\n" +
                    "  meta_1=\"https://www.google.com\"\n" +
                    "  meta_1_url=\"https://www.google.com\"\n" +
                    "  meta_2=\"https://www.google.com\"\n" +
                    "  meta_3=\"https://www.google.com\"\n" +
                    "  url=\"https://www.google.com\"\n" +
                    "  video=\"1\"\n" +
                    "  content_color=\"black\"\n" +
                    "  author=\"Ani kama\"\n" +
                    "  loggedin=\"true\"\n" +
                    "  authcontent=\"authorcontent\"\n" +
                    "  authbuttons=\"author button\"\n" +
                    "  anoncontent=\"\"\n" +
                    "  anonbuttons=\"\"\n" +
                    "  >\n" +
                    "  </nokia-header>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       page:'challenge',\n" +
                    "       pageList:['challenge', 'asset', 'article'],\n" +
                    "       image:'http://localhost:8080/static/open/images/video_cover.jpg'\n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp3',
                name: 'Nokia Carousel',
                template: "<div id=\"demo\">\n" +
                    "  <nokia-carousel \n" +
                    "      :group-number=\"group\"\n" +
                    "      :duration=\"duration\"\n" +
                    "      type=\"type\"\n" +
                    "      :auto-play=\"isplay\">\n" +
                    "  </nokia-carousel>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       duration:10,\n" +
                    "       group:2,\n" +
                    "       isplay: true\n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding: 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp4',
                name: 'Nokia Socials',
                template: "<div id=\"demo\">\n" +
                    "<nokia-socials></nokia-socials>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp5',
                name: 'Nokia Pagination',
                template: "<div id=\"demo\">\n" +
                    "  <nokia-pagination\n" +
                    "   :item-per-page-modes=\"itemPerPageModes\" \n" +
                    "   :item-selected=\"itemSelected\" \n" +
                    "   :total-page=\"totalPage\" \n" +
                    "   :current-page=\"currentPage\" \n" +
                    "  >\n" +
                    "  </nokia-pagination>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       itemPerPageModes:['5', '10', '15', '20'], \n" +
                    "       itemSelected:'5', \n" +
                    "       totalPage:10, \n" +
                    "       currentPage:5, \n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },

            {
                id: 'cmp6',
                name: 'Nokia Select',
                template: "<div id=\"demo\">\n" +
                    "<nokia-select>Select</nokia-select>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp7',
                name: 'Nokia Navigation',
                template: "<div id=\"demo\">\n" +
                    "\t<nokia-navigation></nokia-navigation>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    " });",
                style: '#demo {padding : 20px}',

            },
            {
                id: 'cmp8',
                name: 'Nokia Flickity',
                template: "<div id=\"demo\">\n" +
                    "<nokia-flickity></nokia-flickity>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp9',
                name: 'Nokia Avatar User',
                template: "<div id=\"demo\">\n" +
                    "<nokia-avatar-user \n" +
                    " name=\"Ani kama Nanika\" \n" +
                    " title=\"Fontend Dev\" \n" +
                    " link=\"https://www.google.com\" \n" +
                    " :image=\"image\" \n" +
                    " :directory=\"directory\" \n" +
                    " mail=\"somone@domain.com\" \n" +
                    " location=\"Ho Chi Minh city, Vietnam\" \n" +
                    "></nokia-avatar-user>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       image:'http://localhost:8080/static/img/avatar.05aa881.svg', \n" +
                    "       directory:'static/open', \n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
            {
                id: 'cmp10',
                name: 'Nokia Async Table',
                template: "<div id=\"demo\">\n" +
                    "<nokia-async-table :columns=\"columns\" \n" +
                    " :item-per-page-modes=\"itemPerPageModes\" \n" +
                    " :item-per-page-mode-selected=\"itemPerPageModeSelected\" \n" +
                    " :url=\"url\" \n" +
                    "></nokia-async-table>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       columns:[]\, \n " +
                    "       itemPerPageModes:[]\, \n" +
                    "       itemPerPageModeSelected:'mode'\, \n" +
                    "       url:'url'\, \n " +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '#demo {padding : 20px}',
                headText: "",
                links: [],
                scripts: [],
            },
        ]
    },
    {
        projectName: 'Project 2',
        projectId: 'pj2',
        listComponents: [],
        projectHeadTag: "<meta charset=\"utf-8\">\n" +
            "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
        projectLinks: [""],
        projectScripts: [""],
    },
];

export default projects;
