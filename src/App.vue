<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { branches, business, clients, products, sections, showClients, social, socialLabels, text, vacancies } from './content'

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
const navIds = computed(() => sections.filter(s => s !== 'clients' || showClients))
const waLink = msg => 'https://wa.me/' + business.whatsapp + '?text=' + encodeURIComponent(msg)
const wa = waLink('Hello VetCare Plus')
const mailApply = 'mailto:' + business.email + '?subject=' + encodeURIComponent('Job application - VetCare Plus')
const hide = e => { e.target.style.display = 'none' }
const go = id => { menu.value = false; const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

/* products filter */
const cat = ref('all')
const shown = computed(() => products.filter(p => cat.value === 'all' || p.cat === cat.value))

/* maps (OpenStreetMap, no key needed) */
const mapSrc = b => {
  const dx = 0.012, dy = 0.008
  return 'https://www.openstreetmap.org/export/embed.html?bbox=' + [b.lon - dx, b.lat - dy, b.lon + dx, b.lat + dy].join('%2C') + '&layer=mapnik&marker=' + b.lat + '%2C' + b.lon
}
const gmap = b => 'https://www.google.com/maps/search/?api=1&query=' + b.lat + ',' + b.lon
const groute = b => 'https://www.google.com/maps/dir/?api=1&destination=' + b.lat + ',' + b.lon

/* social buttons: only the ones with a link */
const socials = computed(() => Object.keys(social).filter(k => social[k]).map(k => ({ k, url: social[k], label: socialLabels[k] })))

/* chat */
const chatOpen = ref(false)
const chatText = ref('')
function sendChat() {
  const m = chatText.value.trim() || 'Hello VetCare Plus'
  window.open(waLink(m), '_blank', 'noopener')
  chatText.value = ''
  chatOpen.value = false
}

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
        <a v-for="s in navIds.slice(1)" :key="s" :href="'#' + s" @click.prevent="go(s)">{{ t.nav[s] }}</a>
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
      <a v-for="s in navIds" :key="s" :href="'#' + s" @click.prevent="go(s)">{{ t.nav[s] }}</a>
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
        <div class="chips">
          <button v-for="k in ['all', 'poultry', 'livestock', 'vaccines']" :key="k" class="chipbtn" :class="{ on: cat === k }" @click="cat = k">{{ t.filters[k] }}</button>
        </div>
        <div class="grid">
          <article v-for="p in shown" :key="p.name" class="card">
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
          <div v-for="b in branches" :key="b.name" class="branch reveal">
            <h3>{{ b.name }}</h3>
            <p>{{ b.place[lang] }}</p>
            <p class="muted">{{ t.contact.opens }} {{ t.contact.openAt }} &middot; {{ t.contact.closes }} {{ t.contact.closeAt }}</p>
            <p v-for="ph in business.phones" :key="ph.tel" style="margin:0 0 4px;"><a :href="'tel:' + ph.tel">{{ ph.label }}</a></p>
            <div class="map"><iframe :src="mapSrc(b)" :title="b.name" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <div class="mapbtns">
              <a class="mini" :href="gmap(b)" target="_blank" rel="noopener">{{ t.branches.map }}</a>
              <a class="mini fill" :href="groute(b)" target="_blank" rel="noopener">{{ t.branches.route }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="showClients" id="clients" class="block alt">
      <div class="wrap">
        <h2 class="reveal">{{ t.clients.title }}</h2>
        <p class="muted reveal">{{ t.clients.intro }}</p>
        <div class="grid three">
          <div v-for="c in clients" :key="c.name" class="svc reveal">
            <h3>{{ c.name }}</h3>
            <p v-if="c.note">{{ c.note[lang] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="careers" class="block" :class="{ alt: !showClients }">
      <div class="wrap">
        <h2 class="reveal">{{ t.careers.title }}</h2>
        <p class="big reveal" style="max-width:60ch;">{{ t.careers.intro }}</p>
        <div v-if="vacancies.length" class="grid two">
          <div v-for="(v, i) in vacancies" :key="i" class="svc reveal">
            <h3>{{ v.title[lang] }}</h3>
            <p v-if="v.where"><strong>{{ t.careers.where }}:</strong> {{ v.where }}</p>
            <p v-if="v.deadline"><strong>{{ t.careers.deadline }}:</strong> {{ v.deadline }}</p>
            <p v-if="v.desc">{{ v.desc[lang] }}</p>
          </div>
        </div>
        <p v-else class="note reveal">{{ t.careers.none }}</p>
        <div class="cta" style="margin-top:20px;">
          <a class="btn fill-btn" :href="mailApply">{{ t.careers.apply }}</a>
          <a class="btn outline-btn" :href="waLink('Hello, I would like to work with VetCare Plus')" target="_blank" rel="noopener">{{ t.careers.applyWa }}</a>
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
        <div v-if="socials.length" class="social">
          <h4>{{ t.contact.follow }}</h4>
          <div class="socrow"><a v-for="s in socials" :key="s.k" :href="s.url" target="_blank" rel="noopener">{{ s.label }}</a></div>
        </div>
      </div>
    </section>

    <footer class="foot">
      <div>&copy; {{ year }} VetCareplus Malawi. {{ t.footer }}</div>
      <div class="socrow small">
        <a v-for="s in socials" :key="s.k" :href="s.url" target="_blank" rel="noopener">{{ s.label }}</a>
        <span>{{ business.tagline }}</span>
      </div>
    </footer>

    <div v-if="chatOpen" class="chat">
      <div class="chat-head">
        <strong>{{ t.chat.title }}</strong>
        <button aria-label="Close" @click="chatOpen = false">&times;</button>
      </div>
      <div class="chat-body">
        <div class="bubble">{{ t.chat.hello }}</div>
        <div class="quick">
          <button v-for="q in t.chat.quick" :key="q" @click="chatText = q">{{ q }}</button>
        </div>
        <textarea v-model="chatText" rows="3" :placeholder="t.chat.ph"></textarea>
        <button class="sendbtn" @click="sendChat">{{ t.chat.send }}</button>
        <p class="chat-note">{{ t.chat.note }}</p>
      </div>
    </div>
    <button class="float" :aria-label="t.chat.open" @click="chatOpen = !chatOpen">{{ chatOpen ? '\u00D7' : t.chat.open }}</button>
  </div>
</template>
