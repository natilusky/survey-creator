<template>
  <div
    v-if="model.page"
    :id="model.page.id"
    class="svc-page__content"
    :class="model.css"
    v-key2click
    @click="
      (e) => {
        model.select(model, e);
        e.stopPropagation();
      }
    "
    @mouseover="hover"
    @mouseleave="hover"
  >
    <div class="svc-page__content-actions">
      <sv-action-bar :model="model.actionContainer"></sv-action-bar>
    </div>
    <survey-page
      :survey="model.creator.survey"
      :page="model.page"
    ></survey-page>
    <sv-action-bar :model="model.footerActionsBar"></sv-action-bar>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { SurveyModel, PageModel } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
import { PageAdorner } from "survey-creator-core";
const props = defineProps<{
  creator: CreatorBase;
  survey: SurveyModel;
  page: PageModel;
}>();
const model = useCreatorModel(
  () => new PageAdorner(props.creator, props.page),
  [() => props.page],
  (value) => {
    value.dispose();
  }
);
const hover = (event: MouseEvent) => {
  model.value.hover(event, event.currentTarget);
};
</script>
