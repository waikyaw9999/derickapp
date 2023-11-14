<template>
    <metainfo></metainfo>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Clear Cache on Cloudflare</h1>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-6 input-panel">
                            <label for="apiToken">API Token</label>
                            <input type="text" id="apiToken" class="form-control" placeholder="Enter your API Token" v-model="apiToken">
                            <label for="zoneId">ZONE ID</label>
                            <input type="text" id="zoneId" class="form-control zone-id" placeholder="Enter your ZONE ID"
                                v-model="zoneId">
                            <button type="button" class="btn btn-primary form-control" @click="clear">Clear Cache</button>
                            <div class="alert alert-success alert-dismissible result-message" role="alert" v-if="message">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex cloudflare-information">
                        <h3>Clearing the cache on Cloudflare is easy if you want to do it manually. <br />Just follow these steps:</h3>
                        <ol style="list-style-type: none;">
                            <li><a href="https://dash.cloudflare.com/">Log into your Cloudflare account.</a></li>
                            <li>Click on the domain you want to clear the cache for.</li>
                            <li>Click on the <strong>Caching</strong> tab.</li>
                            <li>Click on the <strong>Purge Everything</strong> button.</li>
                            <li>Wait for the cache to clear.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'CacheControl',
    metaInfo: {
        title: 'Clear Cache on Cloudflare CDN and Cache Control',
        description: 'Clearing the cache on Cloudflare.',
        keywords: 'cloudflare, cache, clear, purge, everything, cdn, content, delivery, network, website, web, site, page, pages, post, posts, blog, blogs, article, articles, seo, search, engine, optimization, google, bing, yahoo, yandex, duckduckgo, baidu, ask, aol, excite, wolframalpha, yippy, searchencrypt, qwant, gigablast, swisscows, searx, startpage, search, engine, optimization, seo, search engine optimization, search engine, search engine optimization, search engine optimization, search engine optimization, search engine optimizat'
    },
    data() {
        return {
            apiToken: '',
            zoneId: '',
            results: [],
            message: ''
        }
    },
    mounted() {
        this.setMetaData();
    },
    methods: {
        setMetaData(){
            document.title = 'Clear Cache on Cloudflare';
            document.querySelector('meta[name="description"]').setAttribute("content", "Clearing the cache on Cloudflare. Clear the cache on your website.");
            document.querySelector('meta[name="keywords"]').setAttribute("content", "cloudflare, cache, clear, purge, everything, cdn, content, delivery, network, website, web, site, page, pages, post, posts, blog, blogs, article, articles, seo, search, engine, optimization, google, bing, yahoo, yandex, duckduckgo, baidu, ask, aol, excite, wolframalpha, yippy, searchencrypt, qwant, gigablast, swisscows, searx, startpage, search, engine, optimization, seo, search engine optimization, search engine, search engine optimization, search engine optimization, search engine optimization, search engine optimizat");
            document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1.0");
            document.querySelector('meta[property="og:title"]').setAttribute("content", "Clear Cache on Cloudflare");
            document.querySelector('meta[property="og:description"]').setAttribute("content", "Clearing the cache on Cloudflare.");
            document.querySelector('meta[property="og:image"]').setAttribute('content', "https://www.ygnair.com/images/julien-duduoglu-u1AsrrGaCEY-unsplash.jpg");
            document.querySelector('meta[property="og:url"]').setAttribute("content", "https://www.ygnair.com/cloudflarecache");
            document.querySelector('meta[name="twitter:card"]').setAttribute("content", "summary_large_image");
            document.querySelector('meta[name="twitter:site"]').setAttribute("content", "@nicholaswai99");
            document.querySelector('meta[name="twitter:creator"]').setAttribute("content", "@nicholaswai99");
            document.querySelector('meta[name="twitter:title"]').setAttribute("content", "Clear Cache on Cloudflare");
            document.querySelector('meta[name="twitter:description"]').setAttribute("content", "Clearing the cache on Cloudflare.");
            document.querySelector('meta[name="twitter:image"]').setAttribute("content", "https://www.ygnair.com/images/julien-duduoglu-u1AsrrGaCEY-unsplash.jpg");
        },
        clear() {
            this.results = [];
            this.message = '';

            if (this.zoneId === '') {
                this.message = 'Please enter your Zone Id.';
                return;
            }
            if (this.apiToken === '') {
                this.message = 'Please enter your API Token.';
                return;
            }

            this.message = 'Clearing caches...';

            const requestData = { zoneId: this.zoneId, apiToken: this.apiToken };
            axios.post('/clearcache', requestData
            ).then(response => {
                this.results = response.data;
                if (this.results.success) {
                    this.message = 'The cache has been cleared.';
                } else {
                    this.message = 'There was an error.';
                }
            }).catch(error => {
                this.message = 'There was an error.' + error;
            });
        }
    }
}
</script>
<style scoped>
.zone-id {
    margin-bottom: 10px;
}

#apiToken {
    margin-bottom: 10px;
}

.col-md-12>h1 {
    margin-top: 10px;
    margin-bottom: 10px;
}

.result-message {
    margin-top: 10px;
    margin-bottom: 10px;
}
.cloudflare-information {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
}
.input-panel {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    width: -webkit-fill-available;
}
</style>