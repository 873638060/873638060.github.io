var routes = [
    {
        path: '/',
        component: {
            template:
            `
            <div>
                <h1>/ 简介</h1>
                <h3>求职意向</h3>
                <p style="font-weight: 600">前端工程师</p></br>
                <h3>自我评价</h3>
                <ul>
                    <li style="font-weight: 600">
                        熟练掌握前端知识，如：HTML、CSS、JS等；
                    </li></br>
                    <li style="font-weight: 600">
                        熟练使用WebStorm、Atom、Sublime、Notepad++、DW等编辑器；
                    </li></br>
                    <li style="font-weight: 600">
                        能够根据公司要求制定html页面，制作响应式页面，并确保JS的良好执行；
                    </li></br>
                    <li style="font-weight: 600">
                        具备良好的沟通能力和团队协作能力，有团队精神，能快速融入新的团队。
                    </li>
                </ul>
            </div>
            `
        },
    },
    {
        path: '/edu',
        component: {
            template:
            `
            <div>
                <h1>/ 掌握技能</h1>
                <h3>熟练掌握：</h3> 
                <p style="font-weight: 600">
                    HTML、CSS、JS、Bootstrap
                </p>
                <p style="font-weight: 600">
                    PS、PR、LR
                </p>
                <h3>熟练使用：</h3> 
                <p style="font-weight: 600">
                    JQuery、Vue、Vue-router、Git、node、npm
                </p>
                <h3>熟悉使用：</h3> 
                <p style="font-weight: 600">
                    webpack
                </p>
            </div>
            `
        },
    },
    {
        path: '/act',
        component: {
            template:
            `
            <div>
                <h1>/ 校园活动</h1> 
                <h3>2015.09~2017.06 学生会 干事</h3>
                <ul>
                    <li style="font-weight: 600">
                        负责学院活动的宣传海报、视频、杂志的制作；
                    </li></br>
                    <li style="font-weight: 600">
                        参与院思想道德素质大赛，获得视频组二等奖
                    </li></br>
                    <li style="font-weight: 600">
                        积极参与学生会的各项活动，参与各类学生活动的策划。
                    </li>
                </ul></br>
                <h3>2015.09~2018.06 辩论队 副队长</h3>
                <ul>
                    <li style="font-weight: 600">
                        带领并指导队员们学习辩论；
                    </li></br>
                    <li style="font-weight: 600">
                        参与院辩论赛，获得殿军；
                    </li></br>
                    <li style="font-weight: 600">
                        参与院辩论赛，荣获多次最佳辩手，优秀辩手；
                    </li></br>
                    <li style="font-weight: 600">
                        代表学校参加广东省第三届环保杯辩论赛。
                    </li>
                </ul>
            </div>
            `
        },
    },
    {
        path: '/honor',
        component: {
            template:
                `
            <div>
                <h1>/ 荣誉</h1>
                <h3>获得奖项</h3>
                <ul>
                    <li style="font-weight: 600">东莞理工学院城市学院思想道德素质大赛视频组<span style="color: red">二等奖</span></li></br></br>
                    <li style="font-weight: 600">东莞理工学院城市学院绿色建筑大赛<span style="color: red">二等奖</span></li></br>
                    <li style="font-weight: 600">广东省绿色建筑大赛市<span style="color: red">三等奖</span></li></br></br>
                    <li style="font-weight: 600">东莞理工学院城市学院辩论赛<span style="color: red">殿军</span></li></br>
                    <li style="font-weight: 600">东莞理工学院城市学院辩论赛<span style="color: red">最佳辩手</span></li></br>
                    <li style="font-weight: 600">东莞理工学院城市学院辩论赛<span style="color: red">优秀辩手</span></li>
                </ul>
            </div>
            `
        },
    },
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router: router,
});