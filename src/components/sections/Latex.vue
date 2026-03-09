<script lang="ts">
import { defineComponent } from 'vue'
import { VueLatex } from 'vatex'

export default defineComponent({
  components: {
    VueLatex
  }
})
</script>

<template>
  <div class="latex-section">
    <el-divider />

    <el-row justify="center" >
      <h1 class="section-title" id="Supplementary">Supplementary</h1>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        
        <div class="theorem-section" style="margin-bottom: 20px;">
          <p>
            <strong>Theorem 1.</strong> Doppler velocity of the reflection, i.e. relative radial velocity 
            <VueLatex expression="v^r_{i,j}" />, is determined by the radar's ego-velocity 
            <VueLatex expression="\boldsymbol{v}^r" /> and the scatter's directional vector 
            <VueLatex expression="(\alpha,\beta)" /> when the target is stationary relative to the ground. where 
            <VueLatex expression="(\alpha,\beta)" /> denote the azimuth and elevation of the scatter with respect to the radar's coordinate system.
          </p>
        </div>

        <div class="proof-section">
          <p><em>Proof.</em></p>
          
          <figure style="text-align: center; margin: 30px 0;">
            <img src="doppler.png" alt="Doppler-Consistency for stationary positive scatters" style="max-width: 100%; height: auto;" />
            <figcaption style="margin-top: 10px; font-size: 14px; color: #666;">
              Fig. 1: Doppler-Consistency for stationary positive scatters.
            </figcaption>
          </figure>

          <p>
            As Fig. 1 shows, the Doppler-Consistency bridges Spatial and Doppler features of the radar. Considering a stationary target relative to the ground, the Doppler velocity of the reflection can be expressed as the projection of the radar's ego-velocity 
            <VueLatex expression="\boldsymbol{v}^{r}" /> onto the directional vector of the scatter 
            <VueLatex expression="\boldsymbol{n}=\left[ \cos \alpha_i\cos \beta_j,\sin \alpha_i\cos \beta_j,\sin \beta_j \right]^T" />:
          </p>

          <VueLatex expression="v_{i,j}^{r}=\left[ \cos \alpha_i\cos \beta_j,\sin \alpha_i\cos \beta_j,\sin \beta_j \right] \left[ v_{x}^{r},v_{y}^{r},v_{z}^{r} \right] ^T" display-mode />

          <p>
            According to the Cauchy-Schwarz inequality, we can derive the upper bound of the Doppler velocity.
          </p>

          <VueLatex expression="
            \begin{aligned}
            |v_{i,j}^{r}|&=|\left[ \cos \alpha_i\cos \beta_j,\sin \alpha_i\cos \beta_j,\sin \beta_j \right] \left[ v_{x}^{r},v_{y}^{r},v_{z}^{r} \right] ^T|\\
            &\leq \sqrt{\left( \cos \alpha_i\cos \beta_j \right) ^2+\left( \sin \alpha_i\cos \beta_j \right) ^2+\left( \sin \beta_j \right) ^2}\\
            &\cdot \sqrt{\left( v_{x}^{r} \right) ^2+\left( v_{z}^{r} \right) ^2+\left( v_{z}^{r} \right) ^2}\\ 
            &=\sqrt{\left( \cos \beta_j \right) ^2+\left( \sin \beta_j \right) ^2}\lVert \boldsymbol{v}^{r} \rVert _2=\lVert \boldsymbol{v}^{r} \rVert _2
            \end{aligned}
          " display-mode />

          <p>
            Eqn. 2 holds if and only if object's spatial direction vector 
            <VueLatex expression="\left[ \cos \alpha_i\cos \beta_j,\sin \alpha_i\cos \beta_j,\sin \beta_j \right]" /> 
            is collinear with the radar's ego velocity vector 
            <VueLatex expression="\boldsymbol{v}^{r}" />. As shown in Fig. 1, this means the peak height of the distribution surface of 
            <VueLatex expression="v^{r}_{i,j}" /> <em>w.r.t.</em> 
            <VueLatex expression="\alpha_i" /> and 
            <VueLatex expression="\beta_j" /> corresponds to the magnitude of the radar's velocity, while the peak position indicates the azimuth and elevation angles of the radar's motion.
          </p>
          
          <div style="text-align: right; margin-top: 10px;">
            &#8718;
          </div>
        </div>

        <div class="theorem-section" style="margin-bottom: 20px;">
          <p>
            <strong>Theorem 2.</strong> For a radar detection measurement 
            <VueLatex expression="{\boldsymbol {\hat p}}_{i,j,k}" /> truely located at 
            <VueLatex expression="(r_i, \alpha_j, \beta_k)" /> in polar coordinates with radial range uncertainty 
            <VueLatex expression="\boldsymbol{\delta }_{r _i}\sim \mathcal{N} \left( 0,\sigma^2_{r_i} \right)" />, azimuth uncertainty 
            <VueLatex expression="\boldsymbol{\delta }_{\alpha _i}\sim \mathcal{N} \left( 0,\sigma^2_{\alpha_i} \right)" /> and elevation uncertainty 
            <VueLatex expression="\boldsymbol{\delta }_{\beta _i}\sim \mathcal{N} \left( 0,\sigma^2_{\beta_i} \right)" />, the corresponding uncertainty in Cartesian coordinates can be approximated by a Gaussian distribution.
          </p>
        </div>

        <div class="proof-section">
          <p><em>Proof.</em></p>
          
          <p>
            Considering 
            <VueLatex expression="\boldsymbol{p}" /> 
            can be approximated by a first-order Taylor expansion around 
            <VueLatex expression="(r, \alpha, \beta)" />, we have:
          </p>

          <VueLatex expression="
            \begin{aligned}
            &\boldsymbol{\delta }_{\boldsymbol{p}}=\frac{\partial \boldsymbol{p}}{\partial r}\boldsymbol{\delta }_r+\frac{\partial \boldsymbol{p}}{\partial \alpha}\boldsymbol{\delta }_{\alpha}+\frac{\partial \boldsymbol{p}}{\partial \beta}\boldsymbol{\delta }_{\beta}\\
            &=\left[ \begin{matrix}
              \cos \alpha \cos \beta&		-r\sin \alpha \cos \beta&		-r\cos \alpha \sin \beta\\
              \sin \alpha \cos \beta&		r\cos \alpha \cos \beta&		-r\sin \alpha \sin \beta\\
              \sin \beta&		0&		r\cos \beta\\
            \end{matrix} \right] \left[ \begin{array}{c}
              \boldsymbol{\delta }_r\\
              \boldsymbol{\delta }_{\alpha}\\
              \boldsymbol{\delta }_{\beta}\\
            \end{array} \right]
            \end{aligned}
          " display-mode />

          <p>
            Let the Jacobian matrix denoted as 
            <VueLatex expression="{\boldsymbol J}" />. Since 
            <VueLatex expression="\boldsymbol{\delta }_r" />, 
            <VueLatex expression="\boldsymbol{\delta }_{\alpha}" />, and 
            <VueLatex expression="\boldsymbol{\delta }_{\beta}" /> 
            are independent Gaussian variables, 
            <VueLatex expression="\boldsymbol{\delta }_{\boldsymbol{p}}" /> 
            is also a Gaussian variable. Therefore, the uncertainty in Cartesian coordinates can be approximated by a Gaussian distribution 
            <VueLatex expression="\mathcal{N}(0,{\boldsymbol \Sigma})" />, with covariance matrix 
            <VueLatex expression="\mathbf{\Sigma }=\boldsymbol{J}\mathbf{D}\boldsymbol{J}^T" />, where 
            <VueLatex expression="\mathbf{D}=\mathrm{diag}(\sigma^2_r,\sigma^2_{\alpha},\sigma^2_{\beta})" />.
          </p>

          <div style="text-align: right; margin-top: 10px;">
            &#8718;
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
html[data-theme="light"] .latex-section{
  background: #f2f4f6;
}

html[data-theme="dark"] .latex-section{
  background: #404040;
}

.latex-section{
  padding: 24px 0;
}
</style>