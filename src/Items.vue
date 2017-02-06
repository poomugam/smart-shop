<template>
    <div class="col s12">
        <div class="card-panel">
            <div class="row">
                <div class="col s12 items-toolbar right-align">
                    <ul class="horizontal-list">
                        <li v-show="add_item">
                            <a class="btn-floating teal" @click="add_item=false">
                                <i class="material-icons">list</i>
                            </a>
                        </li>
                        <li v-show="!add_item">
                            <a class="btn-floating green" @click="add_item=true">
                                <i class="material-icons">add</i>
                            </a>
                        </li>
                        <li>
                            <a class="btn-floating blue">
                                <i class="material-icons">search</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row" v-show="!add_item">
                <table class="responsible-table striped highlight">
                    <thead>
                        <tr>
                            <th data-field="id">ID</th>
                            <th data-field="name">Item Name</th>
                            <th data-field="id">Category</th>
                            <th data-field="name">Unit</th>
                            <th data-field="price">Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>JUIC_0001</td>
                            <td>Apple Juice</td>
                            <td>Juice</td>
                            <td>single</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>SNAC_0001</td>
                            <td>Chicken Buff</td>
                            <td>Snacks</td>
                            <td>single</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row" v-show="add_item">
                <form action="" class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input type="text" id="item_category" class="autocomplete validate" v-model="new_item.category">
                            <label for="item_category">Category</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="text" id="item_name" class="validate" v-model="new_item.name">
                            <label for="item_name">Name</label>
                        </div>
                        <div class="input-field col s6">                            
                            <select id="item_unit">
                                <option value="" disabled>Select..</option>
                                <option value="Piece">Piece</option>
                                <option value="Cup">Cup</option>
                                <option value="Packet">Packet</option>
                            </select>
                            <label for="item_unit">Unit</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="number" id="item_price" class="validate" v-model.number="new_item.price">
                            <label for="item_price">Price</label>
                        </div>
                    </div>
                    <hr/>
                    {{new_item_unit}}
                    <hr/>
                    <div class="row">
                        <div class="col s12 right-align">
                            <a class="btn btn-small teal" @click="clearItemForm">
                                <i class="material-icons left">thumb_down</i>
                                Clear
                            </a>
                            <a class="btn btn-small teal" @click="saveItem">
                                Save
                                <i class="material-icons right">thumb_up</i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>

    export default{
        created(){
            setTimeout(()=>{
                $('#item_unit').material_select();
                $('#item_category').autocomplete({
                    data: {
                        "Juices": null,
                        "Icecream":null,
                        "Snacks": null
                    },
                    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
                });
            },100)
        },
        data(){
            return{
                add_item:true,
                new_item:{},
                items:[]
            }
        },
        methods:{
            saveItem(){
                this.new_item.unit = $('#item_unit').val();
                this.items.push(this.new_item);
                clearItemForm();
            },
            clearItemForm(){
                this.new_item = {};
            }
        }
    }
</script>