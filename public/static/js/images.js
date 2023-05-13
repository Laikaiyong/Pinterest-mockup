let images = [
    {
        alt_title: "Chill'in Room",
        image_link: "https://i1.sndcdn.com/artworks-000555002412-054ojp-t500x500.jpg",
    },
    {
        alt_title: "Afternoon Chill Hacking",
        image_link: "https://i1.sndcdn.com/artworks-0Y5dJDUVkYrzU55m-NaG8Wg-t500x500.jpg",
    },
    {
        alt_title: "Afternoon Nap",
        image_link: "https://i.ytimg.com/vi/SKNCfiLZigI/maxresdefault.jpg"
    },
    {
        alt_title: "Chill'in Room",
        image_link: "https://i1.sndcdn.com/artworks-000555002412-054ojp-t500x500.jpg",
    },
    {
        alt_title: "Afternoon Chill Hacking",
        image_link: "https://i1.sndcdn.com/artworks-0Y5dJDUVkYrzU55m-NaG8Wg-t500x500.jpg",
    },
    {
        alt_title: "Afternoon Nap",
        image_link: "https://i.ytimg.com/vi/SKNCfiLZigI/maxresdefault.jpg"
    }
]

function addImages(alt_title, image_link){
    $('.gallery').append(`
        <div class="gallery-item">
          <figure>
            <img src="${image_link}" alt="${alt_title}" />
          </figure>
        </div>
    `);
}