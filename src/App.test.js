// import { render } from '@testing-library/react';
import {create} from 'react-test-renderer';
import App from './App';

let component;
let header;

describe('<App />', () => {
  beforeAll(() => {
    component = create(<App />);
    header = component.root.findByType('header');
  });

  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });

  it('Renderiza el header bien', () => {
    expect(header).toBeDefined();
    expect(header.props.className).toEqual('App-header');

  });

  it('Renderiza un texto, un link y una imagen', () => {
    const img = header.findByType('img');
    const a = header.findByType('a');
    const p = header.findByType('p');

    expect(img).toBeDefined();
    expect(img.props.className).toEqual('App-logo');
    expect(img.props.src).toEqual('logo.svg');

    expect(a).toBeDefined();
    expect(a.props.href).toBe('https://reactjs.org');

    expect(p).toBeDefined();
    expect(p.findByType('code')).toBeDefined();
  })
});