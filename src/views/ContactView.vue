<transition name="menu-slide">
    <div class="navigation_container" :style="{width:menuWidth}">
      <div :class="{ 'menu_but_container': true, 'expanded': showMenu }" @click="toggleMenu()">
      <div ref="menu_but" 
      class="menu_but"
      :style="{backgroundColor: showMenu ? '#000' : '#FAEFE6'}">{{ menu }}</div>
      </div>
      <transition name="slide">
        <div class="item_container" v-if="showMenu">
        <div @click="pushTo('about')" class="menu_item">About Me</div>
        <div class="menu_item">Skills</div>
        <div class="menu_item">Projects</div>
        <div class="menu_item">Contact</div>
        </div>
      </transition>
    </div>
    </transition>