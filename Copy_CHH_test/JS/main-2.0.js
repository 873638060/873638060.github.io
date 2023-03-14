Vue.component('newscard', {
    template:
    `
    <div class="row news-item"> <!--文章区域-->
        <div class="col-sm-3">
            <slot></slot>
        </div>
        <div class="col-sm-9">
            <a href="news-2.0.html" class="title" target="_blank"><slot name="title"></slot></a> <!--标题-->
            <div class="status">
                <slot name="status"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
    `,
});

new Vue ({
    el: '#app',
});