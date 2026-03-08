<script setup>
// Video section does not manage global theme; global theme is handled via `data-theme` and `site-theme` key
</script>

<template>
  <div class="video-section">
    <el-divider />

    <el-row justify="center">
      <el-col :span="24" class="video-shell">
        <div class="title-row">
          <h1 class="section-title" id="exVideo">Demo Video</h1>
        </div>

        <div class="video-grid">
          <div class="video-block">
            <h3 class="video-name">Scene1</h3>
            <video controls muted preload playsinline>
              <source src="/video/Scene1.mp4" type="video/mp4">
            </video>
          </div>

          <div class="video-block">
            <h3 class="video-name">Scene2</h3>
            <video controls muted preload playsinline>
              <source src="/video/Scene2.mp4" type="video/mp4">
            </video>
          </div>

          <div class="video-block">
            <h3 class="video-name">Scene4</h3>
            <video controls muted preload playsinline>
              <source src="/video/Scene4.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.title-row{
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  margin-bottom:12px;
}

.video-shell {
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
}
.theme-toggle{
  position:absolute;
  right:0;
  top:0;
}

.video-grid{
  display:flex;
  flex-wrap: nowrap;
  gap:20px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 4px;
}

.video-block{
  flex: 1 1 0;
  min-width: 300px;
  background: #171717;
  border-radius:12px;
  overflow:hidden;
  transition:background-color .25s ease, box-shadow .25s ease, border-color .25s ease, transform .18s ease;
  padding:10px;
}

.video-name {
  margin: 2px 0 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-color);
}

.video-block video{
  display:block;
  width:100%;
  height:auto;
  aspect-ratio:16 / 9;
  border-radius:8px;
  background:#000;
}

/* Light theme */
html[data-theme="light"] .video-block{
  background: #171717;
  border:1px solid rgba(236, 24, 24, 0.08);
  box-shadow: 0 12px 40px rgba(23, 23, 23, 0.18);
}

/* Dark theme */
html[data-theme="dark"]{
  color: #0f742c;
}
html[data-theme="dark"] .video-block{
  background: #171717;
  border:1px solid rgba(50, 43, 159, 0.06);
  box-shadow: 0 18px 60px rgba(23, 23, 23, 0.7);
}

html[data-theme="light"] .video-section{
  background: #f2f4f6;
}

html[data-theme="dark"] .video-section{
  background: #404040;
}

.section-title{
  margin:0;
}

@media (max-width: 900px){
  .video-shell { padding: 0 10px; }
  .theme-toggle{ position:static; margin-top:8px; }
}

</style>