<template>
    <div class="col s12">
        <div class="card-panel">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="customer" type="text" class="validate">
                            <label for="customer">Customer</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="mobile_no" type="text" class="validate">
                            <label for="mobile_no">Mobile No</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12">
                            <div class="input-field inline">
                                <input id="email" type="email" class="validate">
                                <label for="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>