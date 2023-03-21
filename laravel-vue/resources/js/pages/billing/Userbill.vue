<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">User-Billing</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 ml-5">
            <div class="card mt-3 ml-2">
                <div class="card-body">
                    <img class="card-img-top" src="#" alt="Card image cap" />
                    <div class="card-header">User Information</div>
                    <a href="#" class="btn btn-link">Electric</a>
                    <a href="#" class="btn btn-link">Water</a>
                    <a href="#" class="btn btn-link">Rental</a>
                </div>
            </div>
        </div>
        <router-link to="/laravel-vue/billing"
            ><button class="btn btn-info mr-2">Back</button></router-link
        >

        <div class="content-header">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#billing"
                                role="tab"
                                aria-controls="bill-tab"
                                aria-selected="true"
                                >Bill</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#payment"
                                role="tab"
                                aria-controls="payment-tab"
                                aria-selected="false"
                                >Payment</a
                            >
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="billing"
                            role="tabpanel"
                            aria-labelledby="bill-tab"
                        >
                            <div class="content">
                                <div class="container-fluid">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="OVOP mt-5">
                                                <h6>Overall Balance:</h6>
                                                <h6>Overall Payment:</h6>
                                            </div>
                                            <table class="table">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>Date From</th>
                                                        <th>Date TO</th>
                                                        <th>Metered?</th>
                                                        <th>
                                                            Previous Reading
                                                        </th>
                                                        <th>Present Reading</th>
                                                        <th>KwH Used</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Doe</td>
                                                    <td>john@example.com</td>
                                                    <td>A</td>
                                                    <td>B</td>
                                                    <td>C</td>
                                                    <td></td>
                                                    <td>
                                                        <a href="#"
                                                            ><i
                                                                class="fa fa-edit"
                                                            ></i
                                                            >Edit</a
                                                        >
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade show"
                            id="payment"
                            role="tabpanel"
                            aria-labelledby="payment-tab"
                        >
                            <div class="content">
                                <div class="container-fluid">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="OVOP mt-5">
                                                <h6>Overall Balance:</h6>
                                                <h6>Overall Payment:</h6>
                                            </div>
                                            <table class="table">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>Date From</th>
                                                        <th>Date TO</th>
                                                        <th>Metered?</th>
                                                        <th>
                                                            Previous Reading
                                                        </th>
                                                        <th>Present Reading</th>
                                                        <th>KwH Used</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Doe</td>
                                                    <td>john@example.com</td>
                                                    <td>A</td>
                                                    <td>B</td>
                                                    <td>C</td>
                                                    <td>100</td>
                                                    <td>
                                                        <a href="#"
                                                            ><i
                                                                class="fa fa-edit"
                                                            ></i
                                                            >Edit</a
                                                        >
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
--></template>
