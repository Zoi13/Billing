<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6"></div>
            </div>
        </div>
    </div>
    <!--navigation-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 ml-1">
                <div class="card w-75 mt-3 ml-2">
                    <div class="card-body">
                        <div class="card-header">Content</div>
                        <a href="#" class="btn btn-link">Subscriber</a>
                        <a href="#" class="btn btn-link">Quarters</a>
                        <a href="#" class="btn btn-link">Billing Charges</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-8 ml-5">
                <div class="card mt-3">
                    <div class="card-body">
                        <form>
                            <!--Small Size-->
                            <div class="input-group mb-3">
                                <label
                                    for="InputDateRange"
                                    class="col-form-label mr-3"
                                    >Month</label
                                >
                                <div class="col-sm-3">
                                    <input
                                        type="month"
                                        class="form-control"
                                        name="start"
                                        value="{{ $start }}"
                                    />
                                </div>
                                <button
                                    type="button"
                                    class="btn btn-secondary btn-sm mr-3 col-sm-2"
                                >
                                    Search
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    data-whatever="@mdo"
                                >
                                    Add
                                </button>
                            </div>
                            <!--modal add charges-->
                            <div
                                class="modal fade bd-example-modal-lg"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div
                                    class="modal-dialog modal-lg"
                                    role="document"
                                >
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5
                                                class="modal-title col-sm-9"
                                                id="exampleModalLabel"
                                            >
                                                Add Billing Charges
                                            </h5>

                                            <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true"
                                                    >&times;</span
                                                >
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <!--form for adding-->
                                            <form id="AddContents">
                                                <div class="row mb-3">
                                                    <label
                                                        for="InputDateRange"
                                                        class="col-form-label mr-3"
                                                        >Month/Year</label
                                                    >
                                                    <input
                                                        type="month"
                                                        class="form-control col-sm-4"
                                                        name="start"
                                                        value="{{ $start }}"
                                                    />
                                                </div>
                                                <!--form group-->
                                                <div class="row mb-3">
                                                    <label
                                                        for="gen-charge"
                                                        class="col-form-label mr-5"
                                                        >Generation
                                                        Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3"
                                                        id="gen-charge"
                                                    />
                                                </div>
                                                <div class="row mb-3">
                                                    <label
                                                        for="trans-charge"
                                                        class="col-form-label mr-4"
                                                        >Transmission
                                                        Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-2"
                                                        id="trans-charge"
                                                    />
                                                </div>

                                                <div class="row mb-3">
                                                    <label
                                                        for="sys-charge"
                                                        class="col-form-label mr-5"
                                                        >System Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="sys-charge"
                                                    />
                                                </div>

                                                <div class="row mb-3">
                                                    <label
                                                        for="dis-charge"
                                                        class="col-form-label mr-3"
                                                        >Distribution
                                                        Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="dis-charge"
                                                    />
                                                </div>
                                                <div class="row mb-3">
                                                    <label
                                                        for="dis-charge"
                                                        class="col-form-label mr-5"
                                                        >Supply Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="dis-charge"
                                                    />
                                                </div>
                                                <h5>
                                                    <b>METERING CHARGE</b>
                                                </h5>
                                                <div class="row ml-3 mb-2">
                                                    <label
                                                        for="rc-charge"
                                                        class="col-form-label mr-4"
                                                        >Retail Customer
                                                        Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-2"
                                                        id="rc-charge"
                                                    />
                                                </div>

                                                <div class="row ml-3 mb-2">
                                                    <label
                                                        for="rc-charge"
                                                        class="col-form-label mr-4"
                                                        >Metering System
                                                        Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-1"
                                                        id="rc-charge"
                                                    />
                                                </div>

                                                <div class="row mb-2">
                                                    <label
                                                        for="par-charge"
                                                        class="col-form-label mr-3"
                                                        >Power Account
                                                        Reduction</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="par-charge"
                                                    />
                                                </div>

                                                <div class="row mb-2">
                                                    <label
                                                        for="par-charge"
                                                        class="col-form-label mr-5"
                                                        >Lifeline Rate
                                                        Subsidy</label
                                                    >
                                                    <div
                                                        class="form-check form-check-inline ml-5"
                                                    >
                                                        <input
                                                            class="form-check-input"
                                                            type="radio"
                                                            name="radio-lrs"
                                                            id="Single"
                                                            value="single"
                                                        />
                                                        <label
                                                            class="form-check-label"
                                                            for="Single"
                                                            >Single</label
                                                        >
                                                    </div>
                                                    <div
                                                        class="form-check form-check-inline"
                                                    >
                                                        <input
                                                            class="form-check-input"
                                                            type="radio"
                                                            name="radio-lrs"
                                                            id="Condition"
                                                            value="condition"
                                                        />
                                                        <label
                                                            class="form-check-label"
                                                            for="Condition"
                                                            >With
                                                            Condition</label
                                                        >
                                                    </div>
                                                </div>
                                                <!--ongoing-->
                                                <div class="row mb-2">
                                                    <label
                                                        for="par-charge"
                                                        class="col-form-label mr-6"
                                                    ></label>
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-5"
                                                        id="par-charge"
                                                    />
                                                </div>

                                                <div class="row mb-2">
                                                    <label
                                                        for="inter-sub"
                                                        class="col-form-label mr-5"
                                                        >Interclass
                                                        Subsidy</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="inter-sub"
                                                    />
                                                </div>

                                                <div class="row mb-2">
                                                    <label
                                                        for="par"
                                                        class="col-form-label mr-4"
                                                        >Power Act Readn</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-5"
                                                        id="par"
                                                    />
                                                </div>

                                                <div class="row mb-2">
                                                    <label
                                                        for="cera"
                                                        class="col-form-label mr-5"
                                                        >CERA</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-5"
                                                        id="cera"
                                                    />
                                                </div>
                                                <h5>
                                                    <b>FRANCHISE TAX</b>
                                                </h5>

                                                <div class="row mb-2">
                                                    <label
                                                        for="nt"
                                                        class="col-form-label mr-5"
                                                        >National</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-5"
                                                        id="nt"
                                                    />
                                                </div>
                                                <h5>
                                                    <b>UNIVERSAL CHARGES</b>
                                                </h5>

                                                <div class="row mb-2">
                                                    <label
                                                        for="mc"
                                                        class="col-form-label mr-5"
                                                        >Missionary
                                                        Charge</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="mc"
                                                    />
                                                </div>

                                                <div class="row mb-2">
                                                    <label
                                                        for="ef"
                                                        class="col-form-label mr-5"
                                                        >Environmental
                                                        Fund</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control col-sm-3 ml-4"
                                                        id="ef"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                type="button"
                                                class="btn btn-secondary"
                                                data-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="button"
                                                value="Submit"
                                                class="btn btn-primary"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col-4">Month</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Feb 2023</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
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
