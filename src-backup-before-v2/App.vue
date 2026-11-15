<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { branches, business, products, sections, text } from './content'

let saved = 'en'
try { saved = localStorage.getItem('lang') === 'ny' ? 'ny' : 'en' } catch (e) { saved = 'en' }
const lang = ref(saved)
watch(lang, v => {
  try { localStorage.setItem('lang', v) } catch (e) { /* ignore */ }
  document.documentElement.lang = v
}, { immediate: true })
const t = computed(() => text[lang.value])
const menu = ref(false)
const scrolled = ref(false)
const year = new Date().getFullYear()
const wa = 'https://wa.me/' + business.whatsapp + '?text=' + encodeURIComponent('Hello VetCare Plus')
const hide = e => { e.target.style.display = 'none' }
const go = id => { menu.value = false; const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 40 }, { passive: true })
  const io = new IntersectionObserver(list => list.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) }
  }), { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>

<template>
  <div>
    <header class="top" :class="{ solid: scrolled || menu }">
      <a class="brand" href="#home" @click.prevent="go('home')">
        <img src="/logo.png" alt="" class="logo" @error="hide" />
        <span>{{ business.name }}</span>
      </a>
      <nav class="links">
        <a v-for="s in sections.slice(1)" :key="s" :href="'#' + s" @click.prevent="go(s)">{{ t.nav[s] }}</a>
      </nav>
      <div class="tools">
        <div class="lang">
          <button :class="{ on: lang === 'en' }" @click="lang = 'en'">EN</button>
          <button :class="{ on: lang === 'ny' }" @click="lang = 'ny'">NY</button>
        </div>
        <button class="burger" aria-label="Menu" @click="menu = !menu"><span></span><span></span></button>
      </div>
    </header>

    <div v-if="menu" class="sheet">
      <a v-for="s in sections" :key="s" :href="'#' + s" @click.prevent="go(s)">{{ t.nav[s] }}</a>
    </div>

    <section id="home" class="hero">
      <div class="hero-inner">
        <p class="kicker">{{ t.hero.kicker }}</p>
        <h1>{{ t.hero.title }}</h1>
        <p class="lead">{{ t.hero.text }}</p>
        <p class="tag">{{ business.tagline }}</p>
        <div class="cta">
          <a class="btn solid-btn" :href="wa" target="_blank" rel="noopener">{{ t.hero.cta }}</a>
          <a class="btn line-btn" href="#products" @click.prevent="go('products')">{{ t.hero.cta2 }}</a>
        </div>
      </div>
    </section>

    <section id="about" class="block">
      <div class="wrap narrow reveal">
        <h2>{{ t.about.title }}</h2>
        <p class="big">{{ t.about.text }}</p>
      </div>
    </section>

    <section id="products" class="block alt">
      <div class="wrap">
        <div class="reveal">
          <h2>{{ t.products.title }}</h2>
          <p class="muted">{{ t.products.intro }}</p>
        </div>
        <div class="grid">
          <article v-for="p in products" :key="p.name" class="card reveal">
            <div class="photo"><img :src="'/images/' + p.img" :alt="p.name" loading="lazy" @error="hide" /></div>
            <div class="body">
              <span class="chip">{{ p.kind[lang] }}</span>
              <h3>{{ p.name }}</h3>
              <p>{{ p.desc[lang] }}</p>
            </div>
          </article>
        </div>
        <p class="note reveal">{{ t.products.note }}</p>
      </div>
    </section>

    <section id="services" class="block">
      <div class="wrap">
        <h2 class="reveal">{{ t.services.title }}</h2>
        <div class="grid three">
          <div v-for="(s, i) in t.services.items" :key="i" class="svc reveal">
            <div class="num">0{{ i + 1 }}</div>
            <h3>{{ s.t }}</h3>
            <p>{{ s.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="block alt">
      <div class="wrap">
        <h2 class="reveal">{{ t.shops.title }}</h2>
        <div class="gallery">
          <div v-for="n in 4" :key="n" class="shot reveal"><img :src="'/images/shop-' + n + '.jpg'" alt="" loading="lazy" @error="hide" /></div>
        </div>
      </div>
    </section>

    <section id="branches" class="block">
      <div class="wrap">
        <h2 class="reveal">{{ t.branches.title }}</h2>
        <div class="grid two">
          <div v-for="b in branches" :key="b" class="branch reveal">
            <h3>{{ b }}</h3>
            <p class="muted">{{ t.branches.address }}</p>
            <p>{{ t.contact.opens }} {{ t.contact.openAt }} &middot; {{ t.contact.closes }} {{ t.contact.closeAt }}</p>
            <p v-for="ph in business.phones" :key="ph.tel"><a :href="'tel:' + ph.tel">{{ ph.label }}</a></p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="block dark">
      <div class="wrap reveal">
        <h2>{{ t.contact.title }}</h2>
        <div class="grid three">
          <div>
            <h4>{{ t.contact.hours }}</h4>
            <p>{{ t.contact.opens }}: {{ t.contact.openAt }}</p>
            <p>{{ t.contact.closes }}: {{ t.contact.closeAt }}</p>
          </div>
          <div>
            <h4>{{ t.contact.call }}</h4>
            <p v-for="ph in business.phones" :key="ph.tel"><a :href="'tel:' + ph.tel">{{ ph.label }}</a></p>
            <p><a :href="wa" target="_blank" rel="noopener">WhatsApp {{ business.whatsappLabel }}</a></p>
          </div>
          <div>
            <h4>{{ t.contact.email }}</h4>
            <p><a :href="'mailto:' + business.email">{{ business.email }}</a></p>
            <h4 style="margin-top:14px;">{{ t.contact.address }}</h4>
            <p>{{ business.address }}</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="foot">
      <div>&copy; {{ year }} {{ business.name }}. {{ t.footer }}</div>
      <div>{{ business.tagline }}</div>
    </footer>

    <a class="float" :href="wa" target="_blank" rel="noopener" aria-label="WhatsApp">WhatsApp</a>
  </div>
</template>