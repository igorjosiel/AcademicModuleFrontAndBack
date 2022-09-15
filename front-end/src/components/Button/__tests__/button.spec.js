import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

const renderElement = () => {
    const element = mount(Button, {
        propsData: {
            color: 'blue',
            text: 'Teste',
            icon: 'icon',
        }
    });

    return element;
}

describe('button - Unit', () => {
    it('should be rendered', () => {
        const element = renderElement();

        expect(element.vm).toBeDefined();
    });

    it('should use correct css classes', () => {
        const element = renderElement();

        expect(element.classes()).toContain('btn');
        expect(element.classes()).toContain('default-btn');
    });
})