let projects = [
    {
        projectName: 'Nokia Open Eco System',
        projectId: 'pj1',
        projectHeadTag: "<meta charset=\"utf-8\">\n" +
            "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">",
        projectLinks: ["http://localhost:8080/static/open/css/style.css"],
        projectScripts: ['https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js',"http://localhost:8080/static/open/export.js"],

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
                    "<nokia-hero :title=\"title\" :image=\"image\"></nokia-hero>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       title:'Hello'\, \n " +
                    "       image:'http://localhost:8080/img/hero_default.8547bb5.png'\n" +
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
                    "<nokia-header :title=\"title\" :image=\"image\"></nokia-header>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       title:'Hello'\, \n " +
                    "       image:'http://localhost:8080/img/hero_default.8547bb5.png'\n" +
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
                    "<nokia-carousel :groupNumber=\"groupNumber\" :duration=\"duration\"></nokia-carousel>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       groupNumber:1\, \n " +
                    "       duration:10\n" +
                    "     }\n" +
                    "   }\n" +
                    " });",
                style: '.red{background-color: red}',
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
                    "<nokia-pagination :item-per-page-modes=\"itemPerPageModes\" \n" +
                    " :item-selected=\"itemSelected\" \n" +
                    " :total-page=\"totalPage\" \n" +
                    " :current-page=\"currentPage\" \n" +
                    "></nokia-pagination>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       itemPerPageModes:[]\, \n " +
                    "       itemSelected:'Adudu'\, \n" +
                    "       totalPage:10\, \n " +
                    "       currentPage:5\, \n" +
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
                    "<nokia-select></nokia-select>\n" +
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
                    "<nokia-avatar-user :name=\"name\" \n" +
                    " :title=\"title\" \n" +
                    " :link=\"link\" \n" +
                    " :image=\"image\" \n" +
                    " :directory=\"directory\" \n" +
                    " :mail=\"mail\" \n" +
                    " :location=\"location\" \n" +
                    "></nokia-avatar-user>\n" +
                    "</div>",
                script: "new Vue({\n" +
                    "   el:'#demo',\n" +
                    "   data: function () {\n" +
                    "     return {\n" +
                    "       name:'Adudu'\, \n " +
                    "       title:'Adudu nunuku'\, \n" +
                    "       link:'google.com'\, \n" +
                    "       image:'someimage'\, \n" +
                    "       directory:'directory'\, \n " +
                    "       mail: 'somone@domain.com'\, \n" +
                    "       location:'hcm'\, \n" +
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
            {
                id: 'cmpdemo',
                name: 'demo',
                template: "<h1>HELLO</h1>",
                script: "console.log('Hello From iframe')",
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
        projectLinks: ["http://localhost:9090/static/css/style.css"],
        projectScripts: ["http://localhost:9090/open.js"],
    },
];

export default projects;
