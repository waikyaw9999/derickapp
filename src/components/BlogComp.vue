<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Your Blog Posts</h1>
                <div class="progress" role="progressbar" aria-label="Example with label" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100" style="height: 30px" v-show="!hideCounter">
                    <div class="progress-bar overflow-visible text-dark" :style="{ width: progressValue + '%' }">{{loadingMessage}}</div>
                </div>
                <!-- Iterate through the posts and display them -->    
                <div v-for="post in posts" :key="post.id" class="post">
                <h2>{{ post.title.rendered }}</h2>
                <img :src="post.featured_media.source_url" alt=""/>
                <div v-html="post.content.rendered" style="text-align: left;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Blog-Page',
    data() {
        return {
            posts: [],
            message: '',
            title: '',
            progressValue: 0,
            counter: 0,
            hideCounter: false,
            loadingMessage: 'Loading your blog posts...'
        }
    },
    mounted() {
        this.setMetaData();
        this.updatePageInfo();
    },
    methods: {
        setMetaData() {
            document.title = 'Your Blogs | YGNAir';
            document.querySelector('meta[name="description"]').setAttribute("content", "We are sharing our knowledge and experience with you. Also we are sharing our thoughts and ideas with you and the world.");
            document.querySelector('meta[name="keywords"]').setAttribute("content", "cloudflare, cache, clear, purge, everything, cdn, content, delivery, network, website, web, site, page, pages, post, posts, blog, blogs, article, articles, seo, search, engine, optimization, google, bing, yahoo, yandex, duckduckgo, baidu, ask, aol, excite, wolframalpha, yippy, searchencrypt, qwant, gigablast, swisscows, searx, startpage, search, engine, optimization, seo, search engine optimization, search engine, search engine optimization, search engine optimization, search engine optimization, search engine optimizat");
            document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1.0");
            document.querySelector('meta[property="og:title"]').setAttribute("content", "Blog posts from YGNAir about Cloudflare, SEO, technology, experience, travel and more.");
            document.querySelector('meta[property="og:description"]').setAttribute("content", "We are sharing our knowledge and experience with you. Also we are sharing our thoughts and ideas with you and the world.");
            document.querySelector('meta[property="og:image"]').setAttribute('content', "https://www.ygnair.com/images/julien-duduoglu-u1AsrrGaCEY-unsplash.jpg");
            document.querySelector('meta[property="og:url"]').setAttribute("content", "https://www.ygnair.com/cloudflarecache");
            document.querySelector('meta[name="twitter:card"]').setAttribute("content", "summary_large_image");
            document.querySelector('meta[name="twitter:site"]').setAttribute("content", "@nicholaswai99");
            document.querySelector('meta[name="twitter:creator"]').setAttribute("content", "@nicholaswai99");
            document.querySelector('meta[name="twitter:title"]').setAttribute("content", "Blog posts from YGNAir about Cloudflare, SEO, technology, experience, travel and more.");
            document.querySelector('meta[name="twitter:description"]').setAttribute("content", "We are sharing our knowledge and experience with you. Also we are sharing our thoughts and ideas with you and the world.");
            document.querySelector('meta[name="twitter:image"]').setAttribute("content", "https://www.ygnair.com/images/julien-duduoglu-u1AsrrGaCEY-unsplash.jpg");
        },
        updateProgress() {
            return (this.counter / this.posts.length) * 100;
        },
        updatePageInfo() {
            this.progressValue = 10;    
            axios.get('/your-blog-posts')
            .then(response => {
                response.data.forEach(post => {
                    this.counter++;
                    this.progressValue = this.updateProgress();
                    this.posts.push(post);
                    console.log(post);
                });
                //this.posts = response.data;
                //this.progressValue = 100;
                setInterval(() => {
                    this.hideCounter = true;
                    this.loadingMessage = 'Your blog posts are ready and loaded.';
                }, 1000);
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
            });
        }
    }
}
</script>
<style scoped>
 /* Define mobile-first styles here */
 .post {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }

  @media (min-width: 768px) {
    /* Add styles for larger screens if needed */
    .post {
      margin: 20px auto;
      max-width: 800px;
    }
  }

  .wp-block-cover-image {
    margin: 20px auto;
    max-width: 800px;
  }

</style>