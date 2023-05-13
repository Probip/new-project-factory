<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="news-list-item comments" id="comments">
    <h2>Comments</h2>
    <div class="row pt-45 m-50-30-0-30" v-for="comment in comments">
      <img
        :src="require('../assets/user1.png')"
        alt="user image"
        width="25px"
        height="25px"
      />
      <span>
        <div class="row space-between p-0">
          <div class="row p-0">
            <p class="user p-0">{{ comment.user }}</p>
            <p class="date p-0">{{ comment.date }}</p>
          </div>
          <a class="reply">Reply</a>
        </div>
        <p class="p-0 text-comment">{{ comment.text }}</p>
      </span>
    </div>
    <h2 class="add-your-comment">Add Your Comment</h2>
    <p class="text-comment text-comment-2">
      Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
      hac ultrices nulla non netus. Placerat vehicula donec non suscipit
      egestas, augue vel suspendisse. Et felis venenatis blandit sed est
      ultrices, adipiscing urna.
    </p>
    <form action="" method="get" class="form-comments column">
      <input type="text" name="name" id="name" placeholder="Name" />
      <input type="email" name="email" id="email" placeholder="Email Address" />
      <textarea name="text" id="text" placeholder="Comment"></textarea>
      <button
        type="submit"
        class="submit"
        id="submit-comment"
        @click.prevent="submitComment"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SingleComments",
  data() {
    return {
      comments: [
        {
          user: "Andrew Enns",
          date: "Jan 2nd, 2012 2:35 pm",
          text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
        },
        {
          user: "John Toews",
          date: "Jan 2nd, 2012 2:35 pm",
          text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
        },
        {
          user: "Andrew Enns",
          date: "Jan 2nd, 2012 2:35 pm",
          text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
        },
      ],
    };
  },
  methods: {
    submitComment() {
      //podaci zapisani u formularu comments
      let user = document.querySelector("input#name").value;
      let email = document.querySelector("input#email").value;
      let text = document.querySelector("textarea#text").value;

      //uklanjanje unesenih podataka u formularu
      document.querySelector("input#name").value = "";
      document.querySelector("input#email").value = "";
      document.querySelector("textarea#text").value = "";
      console.log(user);
      console.log(email);
      console.log(text);
    },
  },
};
</script>
