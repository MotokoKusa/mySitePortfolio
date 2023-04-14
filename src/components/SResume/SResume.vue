<template>
  <section class="resume">
    <div class="container">
      <div class="resume__wrap">
        <h3 class="resume__title text--color-1 title">
          {{ $t("resume.title") }}
        </h3>
        <ul class="resume__list">
          <li
            v-for="(el, key) in $tm('resume.experience')"
            :key="key"
            class="resume__item"
          >
            <div class="resume__item__head text--color-1">
              <p class="resume__item__head-title text--color-1">
                {{ $rt(el.name) }}
              </p>
              <p class="resume__item__head-date text--color-4">
                {{ $rt(el.date) }}
              </p>
            </div>
            <a
              v-if="$rt(el.company.link)"
              :href="$rt(el.company.link)"
              class="resume__item-company text--color-5"
            >
              {{ $rt(el.company.name) }}
            </a>
            <p v-else class="resume__item-company text--color-5">
              {{ $rt(el.company.name) }}
            </p>
            <p class="resume__subtitle text--color-1">
              {{ $t("resume.responsibilities.text") }}
            </p>
            <ul
              v-if="$tm(`resume.experience[${key}].duties`)"
              class="resume__duties"
            >
              <li
                v-for="(elem, idx) in $tm(`resume.experience[${key}].duties`)"
                :key="idx"
                class="resume__duties__item text--color-4"
              >
                {{ $rt(elem) }}
              </li>
            </ul>
            <p
              v-if="$rt(el.achievements)"
              class="resume__subtitle text--color-1"
            >
              {{ $t("resume.achievements.text") }}
            </p>
            <p
              class="resume__achievements text--color-4"
              v-if="$rt(el.achievements)"
              v-html="$rt(el.achievements)"
            ></p>
            <p class="resume__subtitle text--color-1">
              {{ $t("resume.stack.text") }}
            </p>
            <ul
              v-if="$tm(`resume.experience[${key}].stack`)"
              class="resume__stack"
            >
              <li
                v-for="(elem, idx) in $tm(`resume.experience[${key}].stack`)"
                :key="idx"
                class="resume__stack__item text--color-4"
              >
                {{ $rt(elem) }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
