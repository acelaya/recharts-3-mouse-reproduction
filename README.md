# Recharts 3 mouse reproduction

## Run the app

    npm i
    node --run dev

Then access the URL printed in the console.

Then, if you click anywhere in the chart, you'll see the state logged in the browser console.

## Run tests

    node --run test

The tests should fail, as it is expecting the state passed to `onMouseDown` not to have undefined properties.

You can also try dispatching the event natively, rather than using testing library's `fireEvent`, by applying this diff:

```diff
diff --git a/test/App.test.tsx b/test/App.test.tsx
index a1dce69..5dad347 100644
--- a/test/App.test.tsx
+++ b/test/App.test.tsx
@@ -7,8 +7,8 @@ describe('<App />', () => {
         const { container } = render(<App onMouseDown={onMouseDown} />);
         const chart = container.querySelector('.recharts-surface');

-        // chart!.dispatchEvent(new MouseEvent('mousedown', { clientX: 100, clientY: 200, button: 0 }));
-        fireEvent.mouseDown(chart!, { clientX: 100, clientY: 200, button: 0 });
+        chart!.dispatchEvent(new MouseEvent('mousedown', { clientX: 100, clientY: 200, button: 0 }));
+        // fireEvent.mouseDown(chart!, { clientX: 100, clientY: 200, button: 0 });

         expect(onMouseDown).toHaveBeenCalled();
         const state = onMouseDown.mock.lastCall?.[0];
```

In this case not even the expectation of `onMouseDown` being invoked will pass.
