<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8">
                <div id="app">
                    <form @submit.prevent="search" class="form-control">
                        <label for="urls" class="form-control">Search for keywords on the URLs.</label><br>
                        <textarea id="urls" v-model="urls" rows="10" cols="50" class="form-control" required
                            placeholder="https://www.example.com&#10;https://www.example.com/yourlink&#10;https://www.example.com/yourlink/anotherlink"></textarea><br>
                        <input id="keyword" v-model="keyword" class="form-control"
                            placeholder="Enter a keyword to search for..." required><br>
                        <button type="submit" class="btn btn-outline-primary form-control">Search</button>
                        <button type="button" class="btn btn-outline-secondary form-control" @click="clearResult">Clear Results</button>
                    </form>
                    <h1>Search Results</h1>
                    <table v-if="results.length">
                        <thead>
                            <tr>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="result in results" :key="result.url">
                                <td>{{ result.url }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-else>{{ message }}</p>
                </div>
            </div>
            <div class="col-xs-6 col-md-4">
                <h1>Search your website online.</h1>
                <p>Enter a list of URLs and a keyword to search for.</p>
            </div>
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from 'axios';

export default {
    name: 'MainApp',
    props: {
        msg: String
    },
    data() {
        return {
            urls: '',
            keyword: '',
            results: [],
            message: '',
            title: '',
        }
    },
    mounted() {
        this.setMetaData();
        //this.updatePageInfo();
    },
    methods: {
        updatePageInfo() {
            this.title = 'Search specific words on website / Crawl and search keywords on website / Search your website online.';
        },
        setMetaData() {
            document.title = "Search specific words on website / Crawl and search keywords on website / Search your website online.";
            document.querySelector('meta[name="description"]').setAttribute('content', "Enter a list of URLs and a keyword to search for. The results will be displayed below.");
            document.querySelector('meta[name="keywords"]').setAttribute('content', "search, keyword, website, online, crawl");
            document.querySelector('meta[name="author"]').setAttribute('content', "Nicholas Wai");
            document.querySelector('meta[name="viewport"]').setAttribute('content', "width=device-width, initial-scale=1.0");
            document.querySelector('meta[property="og:title"]').setAttribute('content', "Search your website online.");
            document.querySelector('meta[property="og:description"]').setAttribute('content', "Enter a list of URLs and a keyword to search for.");
            document.querySelector('meta[property="og:image"]').setAttribute('content', "https://www.ygnair.com/images/julien-duduoglu-u1AsrrGaCEY-unsplash.jpg");
            document.querySelector('meta[property="og:url"]').setAttribute('content', "https://www.ygnair.com");
            document.querySelector('meta[name="twitter:card"]').setAttribute('content', "summary_large_image");
            document.querySelector('meta[name="twitter:site"]').setAttribute('content', "@nicholaswai99");
            document.querySelector('meta[name="twitter:creator"]').setAttribute('content', "@nicholaswai99");
            document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Search specific words on a website or the webpages URLs");
            document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Easily search specific words and keywords on your website or webpages.");
            document.querySelector('meta[name="twitter:image"]').setAttribute('content', "https://www.ygnair.com/images/julien-duduoglu-u1AsrrGaCEY-unsplash.jpg");

        },
        search() {
            this.$gtm.trackEvent({
                event: 'Search-Keyword', // Event type [default = 'interaction'] (Optional)
                category: 'Keywords Search',
                action: 'Search',
                label: 'Search keywords',
                value: 5000,
                noninteraction: false, // Optional
            });
            if (this.urls.length == 0 || this.keyword.length == 0) {
                alert("Please enter a list of URLs and a keyword to search for.");
                return;
            }
            const self = this;
            this.message = "Searching your keywords...this might take a while. Please be patient and do not refresh the page. Thank you.";
            axios.post('/search', { urls: this.urls, keyword: this.keyword })
                .then(function (response) {
                    console.log(response.data);
                    self.results = response.data;
                    if (self.results.length == 0) {
                        self.message = "No results found.";
                    } else {
                        self.message = "Found " + self.results.length + " results.";
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        clearResult() {
            this.results = [];
            this.message = '';
        }
    }
}
</script>
<style scoped>
    .color-and-background {
        border: 1px solid gray;
        background-color: #800080;
    }
    #app {
        margin: 30px;
        padding: 0;
    }
</style>