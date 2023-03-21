<template>
  <div class="content-header">
        <div class="container-fluid">
         <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">References</h1>
                </div>
             
    </div>
        </div>
            </div>
    <div class="container-fluid">
<div class="row">
  <div class="col-sm-3 ml-5">
    <div class="card mt-3 ml-2">
      <div class="card-body">
        <div class="card-header">Content</div>
        <a href="#" class="btn btn-link">Subscriber</a>
        <a href="#" class="btn btn-link">Quarters</a>
        <a href="#" class="btn btn-link">Billing Charges</a>
      </div>
    </div>
  </div>
  <div class="col-sm-7 ml-5">
    <div class="card mt-3">
      <div class="card-body">
        <form>
   <!--Small Size-->
   <div class="input-group mb-sm-3">
     <input type="text" class="form-control-sm mr-4" placeholder="Subscriber ID">
     <input type="text" class="form-control-sm mr-4" placeholder="Name">
     <input type="text" class="form-control-sm mr-4" placeholder="Quarter">
      <select class="form-control-sm" id="Select1">
         <option readonly>Type</option>
         <option>Electric Bill</option>
         <option>Water Bill</option>
         <option>Rental</option>
      </select>
   </div>
   <div class="input-group">
      <select class="form-control-sm mr-4 col-sm-3" id="RankSelect1">
         <option selected>Rank</option>
         <option>Lt. Col</option>
         <option>General</option>
         <option>Lt. General</option>
      </select>
      <select class="form-control-sm mr-4 col-sm-3" id="StatusSelect1">
         <option selected>Status</option>
         <option>Active</option>
         <option>Deactive</option>
         <option>AWOL</option>
      </select>
      <button class="btn btn-primary col-sm-3 btn-sm" type="button">Search</button>
   </div>
</form>
      </div>
    </div>
  </div>
</div>
</div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary ml-3 mb-sm-3" data-toggle="modal" data-target="#addUser" >
  Add Subscriber
</button>

<!-- Modal -->
<div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="AddUserModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addSubscriberLabel">Add Subscriber</h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
   <!--Modal Form-->
   <div class="input-group mb-3 mr-2">
      <select class="form-control-sm col-sm-2 mr-2">
         <option selected>Pvt</option>
         <option>Lt. Col</option>
         <option>General</option>
      </select>
      <input type="text" class="form-control-sm col-sm-4 mr-3" placeholder="Serial Number">
   </div>
<div class="input-group">
     <input type="text" class="form-control-sm col-sm-3 mr-sm-2" placeholder="Firstname">
      <input type="text" class="form-control-sm col-sm-3 mr-sm-2" placeholder="Lastname">
      <input type="text" class="form-control-sm col-sm-3 mr-sm-2" placeholder="Middlename">
      <select class="form-control-sm col-sm-2">
         <option selected>Jr.</option>
         <option>Sr.</option>
         <option>II</option>
         <option>III</option>
         <option>III</option>
      </select>
   </div>
   <!--Status-->
   <div class="custom-control custom-switch mt-sm-3 mb-sm-3">  
            <input type="checkbox" class="custom-control-input" id="customSwitch1">  
            <label class="custom-control-label" for="customSwitch1"> Status </label>  
        </div>  
        <div class="input-group">
     <input type="text" class="form-control-sm col-sm-4 mr-sm-2 mb-sm-3" placeholder="Address">
     <select class="form-control-sm col-sm-4 mr-sm-2">
         <option selected>Quarter Category</option>
         <option>I</option>
         <option>II</option>
         <option>III</option>
         <option>III</option>
      </select>
      <select class="form-control-sm col-sm-3">
         <option selected>Quarter</option>
         <option>I</option>
         <option>II</option>
         <option>III</option>
         <option>III</option>
      </select>
        </div>
        <h6>Transaction</h6>
        <div class="form-check form-check-inline mt-3">
  <input class="form-check-input" type="checkbox" id="ElectricCheckbox1" value="option1" />
  <label class="form-check-label" for="ElectricCheckbox1">Electric</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="WaterCheckbox2" value="option2" />
  <label class="form-check-label" for="WaterCheckbox2">Water</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="RentalCheckbox3" value="option3" />
  <label class="form-check-label" for="RentalCheckbox3">Rental</label>
</div>
</form>
      
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save User</button>
      </div>
    </div>
  </div>
</div>

         

            
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="thead-dark col-sm-3">
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Subscriber ID</th>
                            <th>Serial Number</th>
                            <th>Rank</th>
                            <th>FullName</th>
                            <th>Type</th>
                            <th>Quarter</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>A</td>
                            <td>B</td>
                            <td>C</td>
                            <td>D</td>
                            <td>E</td>
                            <td>F</td>
                            <td>
                              <a href="#"><i class="fa fa-edit"></i>Edit</a>
                            </td>
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