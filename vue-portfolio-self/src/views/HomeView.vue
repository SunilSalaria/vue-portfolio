<!-- template -->
<template>
    <!-- content section -->
    <section id="content-section">
    </section>
    <!-- /content section -->

    <!-- right section -->
    <section class="border-l border-zinc-500 px-12" id="right-section">
        <div class="" id="developer-img-section">
            <div class="px-12 tes relative w-full z-20 p-10">
                <div
                    class="vue-border-1 border border-zinc-500 absolute rounded shadow-md z-10 top-5 bottom-5 right-0 left-0">
                </div>
                <div
                    class="vue-border-2 border border-zinc-500 absolute rounded shadow-md z-10 top-0 bottom-0 right-5 left-5">
                </div>
                <img src="../assets/img/developer-img.jpg" class="rounded shadow-md p-1" alt="">
                <div class="text-zinc-500 text-2xl text-center">I'm</div>

            </div>
        </div>
    </section>
    <!-- /right section -->
</template>

<!-- script -->
<script>

</script>
<!-- style -->
<style scoped>
#content-section {
    width: 65%;
    min-height: 100vh;
}

#right-section {
    width: 35%;
    min-height: 100vh;
}

#developer-img-section {
    margin-top: 100px;
}

.vue-border-1,
.vue-border-2 {
    transition: all .3s ease;
}
</style>
