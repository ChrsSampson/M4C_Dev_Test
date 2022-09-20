export const ContentBlock = item => {
  return `
    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">${item.title}</h2>
        <p class="lead">${item.text}</p>
      </div>
      <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 140px; border-radius: 21px 21px 0 0;"></div>
    </div>
  `;
};

export const Video = item => {
  console.log(item);
  return `
  <div class="video-wrapper">
    <h6>${item.name}</h6>
    <iframe src="https://www.youtube.com/embed/${item.youtube_id}" frameborder="0" allowfullscreen></iframe>
 </div>
  `;
};

// Input select element that is used to filter some content - in this case videos
// takes an array of possible options
export function CategorySelector(options) {
  return(
    `
    <div class="form-group">
      <label for="category">
        Filter By Category
        <i class="bi bi-funnel-fill"></i>
      </label>
      <select class="form-control" id="video-filter">
          ${options.map(o => `<option value="${o}">${o}</option>`).join('')}
      </select>
    </div>
    `
  );

}