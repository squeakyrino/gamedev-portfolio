<template>
  <div><div class="http-404">404</div>
  <div class="http-404-atlus">
    <pre>RESET:
        SEI             
        CLC             
        XCE             
        CLD             

        X16             
        M8              

        LDX   #1FFFH    
        TXS             


        STZ   NMITIME   
        LDA   #BLANKING 
        STA   INIDSP    

        BJSR  ATLUS

        'EL ELOHIM ELOGO ELOHIM SEBAOTH'
        'ELION EIECH ADIER EIECH ADONAI'
        'JAH SADAI TETRAGRAMMATON SADAI'
        'AGIOS O THEOS ISCHIROS ATHANATOS'
        'AGLA AMEN'
        
        真・女神転生</pre>
  </div>
</div>
</template>
       
<style scoped>
.http-404 {
  font-size: 7em;
  line-height: 1em;
  text-align: center;
}
.http-404-atlus {
  background-color: black;
  color: white;
  text-align: left;
  padding: 1em;
  line-height: 1em;
  font-family: PixelFont;
}

@font-face {
  font-family: PixelFont;
  src: url("../css/PixelEmulator-xq08.ttf");
}
</style>
