$(() => {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "json",
  }).done((data) => {
    $.each(data, (i, post) => {
      $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/comments",
        dataType: "json",
      }).done((data) => {
        let demo_td = [];
        let counter = 0;
        $.each(data, (i, comment) => {
          if (comment.postId == post.id && counter < 3) {
            demo_td.push(`${comment.body}`);
            ++counter;
          }
        });

        var limitedText = post.body
        var len = limitedText.length;

        if (len > 30) {
          limitedText = limitedText.substr(0, 30) + "...  ";
        }

        $("#customers").append(`<tr>
          <td class="td_id">${post.id}</td>
          <td class="td_haeding">${post.title}</td>
          <td class="td_concept">${limitedText}</td>
          <td id="commentSize" class="td_comments">
            <p>${demo_td[0]}</p>
            <p>${demo_td[1]}</p>
            <p>${demo_td[2]}</p>
          </td>
        </tr>`);
      });

      // $("ul").append(`<li>${post.title}</li>`);
    });
  });
});
