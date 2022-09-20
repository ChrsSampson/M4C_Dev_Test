/* global $, Promise */

import { ContentBlock, Video, CategorySelector } from './templates.js';

class App {
  constructor() {
    // all videos revieved from the api
    this.videos = [];
    // current category filter
    this.filter= null;
  }

  getVideos() {
    return $.get('http://localhost:3000/videos');
  }

  getContent(q) {
    return $.get(`http://localhost:3000/content${q ? `?${q}` : ''}`);
  }

  async showContent() {
    const rows = await Promise.all([
      this.getContent('row=1'),
      this.getContent('row=2'),
    ]);
    rows.forEach(r => {
      const row = $(
        '<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"></div>'
      );
      r.forEach(c => {
        row.append(ContentBlock(c));
      });
      $('#content-blocks').append(row);
    });
  }

  createVideoSelector () {
    // availible categories - could also be fetched from the api or infered from the videos
    // this is quicker
    const categories = ['Category 1', 'Category 2'];
    this.filter = categories[0];

    // reference to parent container - could be change later to be more dynamic
    const selector = $('#videos-toolbar');

    // attatch to dom
    selector.append( CategorySelector(categories) );

    // set the filter and re-render the videos
    selector.on('change', (e) => {
      this.filter = e.target.value;
      this.showVideos();
    });
  }

   async showVideos() {
    const videoContainer = $('#videos');
    // const videos = await this.getVideos();
    const videos = await this.getVideos();

    // empty the container before adding new videos
    if(videoContainer.children().length > 0) {
      videoContainer.empty();
    }

    // create elements from templates and add to dom
    videos.forEach(v => {
      if(v.category === this.filter) {
        videoContainer.append(Video(v));
      }
    });
  }
}

export default App;
