<script setup>
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title" id="exVideo">Demo Video</h1>
    </el-row>

    <!-- 每个网站的视频的iframe可能不一致，最好在这里手动调整 -->
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10" >

        <!-- local -->
        <!-- <el-container class="video-container">
          <video controls muted preload playsinline>
            <source src="/video/Scene1.mp4" type="video/mp4">
          </video>
        </el-container> -->
        <el-row :gutter="20">
          <el-col :span="8">
            <video controls muted preload playsinline style="width:100%">
              <source src="/video/Scene1.mp4" type="video/mp4">
            </video>
          </el-col>

          <el-col :span="8">
            <video controls muted preload playsinline style="width:100%">
              <source src="/video/Scene2.mp4" type="video/mp4">
            </video>
          </el-col>

          <el-col :span="8">
            <video controls muted preload playsinline style="width:100%">
              <source src="/video/Scene4.mp4" type="video/mp4">
            </video>
          </el-col>
        </el-row>
        
        <!-- bilibili -->
        <!-- <el-container class="video-container">
          <iframe src="//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=BV1zw68YsEP9" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </el-container> -->

        <!-- youtube -->
        <!-- <el-container class="video-container">
          <iframe src="https://www.youtube.com/embed/wjZofJX0v4M?si=BFvRyc3n3fFV_f1G" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </el-container> -->
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.video-container{
  margin: 20px 0px 0px 0px;
}

iframe, video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

</style>