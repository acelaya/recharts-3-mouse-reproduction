import { fireEvent, render } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {
  it('invokes onMouseOver in chart', () => {
    const onMouseDown = vi.fn();
    const { container } = render(<App onMouseDown={onMouseDown} />);
    const chart = container.querySelector('.recharts-surface');

    // chart!.dispatchEvent(new MouseEvent('mousedown', { clientX: 100, clientY: 200, button: 0 }));
    fireEvent.mouseDown(chart!, { clientX: 100, clientY: 200, button: 0 });

    expect(onMouseDown).toHaveBeenCalled();
    const state = onMouseDown.mock.lastCall?.[0];
    expect(state.activeLabel).not.toBeUndefined();
  });
});
