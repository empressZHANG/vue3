<template>
    <div>
     App {{$store.state.user.profile.username}}
     <button @click="$store.commit('user/setUser',{username:'empress'})">设置用户信息</button>
    </div>
</template>