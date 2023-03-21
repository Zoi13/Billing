<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

const getUsers = () => {
    axios.get('/api/users')
    .then((response) => {
        users.value = response.data;
    })
}

onMounted (() => {
    getUsers();
});
</script>

<template>
    <div class="content-header">
        <div class="container-fluid">
         <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">User-Management</h1>
                </div>
             
    </div>
        </div>
            </div>
            

            <div class="content">
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>Subscriber ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Quarter</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="user.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ user.name}}</td>
                            <td>{{ user.address}}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        
                    
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
        </div>
    </div>

                 



<!--
<aside class="control-sidebar control-sidebar-dark">

<div class="p-3">
<h5>Title</h5>
<p>Sidebar content</p>
</div>
</aside>


<footer class="main-footer">

<div class="float-right d-none d-sm-inline">
Anything you want
</div>

<strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">NETBn</a>.</strong> All rights reserved.
</footer>
-->
</template>