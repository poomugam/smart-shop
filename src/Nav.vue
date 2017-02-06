<template>
    <nav>
        <div class="nav-wrapper">
            <a href="/dashboard" class="brand-logo center">{{logo}}</a>
            <ul class="left hide-on-med-and-down">
                <router-link to="/dashboard" tag="li" active-class="active">
                    <a>
                        <i class="material-icons">home</i>
                    </a>
                </router-link>
                <router-link to="/items" tag="li" active-class="active">
                    <a>Items</a>
                </router-link>        
                <router-link to="/sales" tag="li" active-class="active">
                    <a>Sales</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                logo:'Fruit Shop'
            }
        }
    }
</script>