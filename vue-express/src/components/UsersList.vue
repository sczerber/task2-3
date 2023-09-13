<template>

  <div class="hello">
    <h1>Users List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p><strong>Name: </strong> {{ user.name }}</p>
        <p><strong>Username: </strong> {{ user.username }}</p>
        <p><strong>Email: </strong> {{ user.email }}</p>
        <hr />
      </li>
    </ul>
  </div>

</template>
<script>

export default {

  name: 'UsersList',
  data() {
    return {
      users: null,
    }
  },
  mounted() {
    fetch('http://localhost:3000/users/')
        .then((response) => response.json())
        .then((result) => {
          this.users = result
        })
  }
}
</script>
