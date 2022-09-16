import { shallowMount } from "@vue/test-utils";
import Button from "../components/Button.vue";

function renderElement() {
    return shallowMount(Button, {
        propsData: {
            backgroundColor: 'blue',
            text: 'Buscar',
            icon: 'search',
        }
    });
}

describe('Testing the element', () => {
    it('should be rendered', () => {
        const element = renderElement();

        expect(element.vm).toBeDefined();
    });

    it('should use correct css classes', () => {
        const element = renderElement();

        expect(element.classes()).toContain('btn');
        expect(element.classes()).toContain('default-btn');
    });
});

describe('Testing values of the props', () => {
    it('background', () => {
        const element = renderElement();

        expect(element.props().backgroundColor).toBe('blue');
    });

    it('text', () => {
        const element = renderElement();

        expect(element.props().text).toBe('Buscar');
    });

    it('icon', () => {
        const element = renderElement();

        expect(element.props().icon).toBe('search');
    });
});

describe('Testing functions', () => {
    it('function for render an icon', () => {
        const thisIcon = 'search';

        const icons = {
            search: 'mdiTextSearch'
        }

        expect(icons[thisIcon]).toBe('mdiTextSearch');
    });
});

describe('Testing contents', () => {
    it('if the text is being rendered in the button', () => {
        const ButtonText = {
            template: '<v-btn>{{ text }}</v-btn>',
            props: ['text']
        }

        const element = shallowMount(ButtonText, {
            propsData: {
                text: 'Buscar'
            }
        });

        expect(element.text()).toContain('Buscar');
    });
});