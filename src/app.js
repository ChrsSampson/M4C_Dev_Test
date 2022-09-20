/* global $, Promise */

import { ContentBlock, Video } from './templates.js';

class App {
  constructor() {
    this.videos = [];
  }

  getVideos() {
    return $.get('http://localhost:3000/videos');
  }

  getContent(q) {
    return $.get(`http://localhost:3000/content${q ? `?${q}` : ''}`);
  }

  showContent() {
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

  async showVideos() {
    const videos = this.getVideos();
    videos.forEach(v => {
      $('#videos').append(Video(v));
    });
  }
}

export default App;
