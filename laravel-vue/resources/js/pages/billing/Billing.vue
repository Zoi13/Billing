<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Billing</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="col-sm-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Subscriber ID"
                                />
                            </div>
                            <div class="col-sm-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Name"
                                />
                            </div>
                            <div class="col-sm-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Quarter"
                                />
                            </div>
                            <div class="col-sm-3">
                                <button
                                    type="button"
                                    class="btn btn-secondary mr-4"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Subscriber ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Quarter</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>
                            <button type="button" class="btn btn-info mr-2">
                                View
                            </button>
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-toggle="modal"
                                data-target="#generateBill"
                            >
                                Generate Bill
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div
            class="modal fade bd-example-modal-lg"
            id="generateBill"
            tabindex="-1"
            role="dialog"
            aria-labelledby="GenerateBillModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="GenerateBillLabel">
                            Billing
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!--Modal Form-->
                        <form>
                            <h5>Billing Type</h5>
                            <div class="text-center">
                                <div
                                    class="form-check form-check-inline mt-3 col-sm-2"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="ElectricCheckbox1"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="ElectricCheckbox1"
                                        >Electric</label
                                    >
                                </div>

                                <div
                                    class="form-check form-check-inline mt-3 col-sm-2"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="WaterCheckbox2"
                                        value="option2"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="WaterCheckbox2"
                                        >Water</label
                                    >
                                </div>

                                <div
                                    class="form-check form-check-inline mt-3 col-sm-2"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="RentalCheckbox3"
                                        value="option3"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="RentalCheckbox3"
                                        >Rental</label
                                    >
                                </div>

                                <div
                                    class="form-check form-check-inline mt-3 col-sm-3"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="ElecWatCheckbox4"
                                        value="option4"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="ElecWatCheckbox4"
                                        >Electric & Water</label
                                    >
                                </div>
                            </div>
                            <br />
                            <br />
                            <h5>Type of Reading</h5>
                            <div class="text-center">
                                <div
                                    class="form-check form-check-inline mt-3 col-sm-2"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="MeteredCheckbox1"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="MeteredCheckbox1"
                                        >Metered</label
                                    >
                                </div>

                                <div
                                    class="form-check form-check-inline mt-3 col-sm-2"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="FlatRateCheckbox2"
                                        value="option2"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="FlatRateCheckbox2"
                                        >Flat Rate</label
                                    >
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--DATE-->

                    <div class="input-group ml-4">
                        <label for="InputDateRange" class="col-form-label mr-1"
                            >Month/Year</label
                        >
                        <div class="col-sm-2">
                            <input
                                type="month"
                                class="form-control"
                                name="start"
                                value="{{ $start }}"
                            />
                        </div>
                    </div>
                    <br />

                    <!--Close Button-->
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-warning">
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Test-->

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
