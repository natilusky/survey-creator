import { TabDesignerViewModel } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { ElementWrapperFactory } from "../../element-wrapper-factory";

const template = require("./designer.html");
// import template from "./designer.html";

ko.components.register("svc-tab-designer", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new TabDesignerViewModel<Survey>(params.creator);
      const wrapper: ElementWrapperFactory = new ElementWrapperFactory(
        params.creator
      );
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        wrapper.dispose();
      });
      return model;
    },
  },
  template: template,
});
