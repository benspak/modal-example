# React Modal Component

## What is a Modal

“Modality creates focus by preventing people from doing other things until they complete a task or dismiss a message or view” — Apple
“Critical information that requires a specific user task, decision, or acknowledgement” — Google

Modals (also known as modal windows, overlays, and dialogs) are large UI elements that sit on top of an application’s main window—often with a layer of transparency behind them to give users a peek into the main app.

To return to the application’s main interface, users must interact with the modal layer. Because they are inherently and deliberately disruptive, they should not be used lightly.

## Modal Usage Best Practices

Use modal screens for self-contained processes, use Non-Modal Screens for everything else.

Save modals for high-impact messaging.

"Minimize the use of modality. Generally, people prefer to interact with apps in nonlinear ways. Consider creating a modal context only when it’s critical to get someone’s attention, when a task must be completed or abandoned to continue using the app, or to save important data." — Apple

## Modal Use Cases

- User onboarding - A modal window can be just the thing for a simple welcome message that warmly greets new users.
- Feature announcements - Big announcements—like a product redesign or the release of a long-awaited feature—often deserve a big modal splash.
- Additional user input - Modal windows can also be used for success messages, important alerts, and other things that require additional user input, whether that’s a form or a one-click confirmation. These incidents are worth interrupting a workflow for if they have important consequences—like deleting something, saving progress, making a purchase, etc.
- Up sales - While annoying on desktop, modals can come in handy if tastefully implemented on mobile.

## Modal Elements and Layout

- Close icon - Click to close. Also, clicking off the modal closes it.
- Title - Describes dialogue's purpose. Icon is optional. Always left aligned.
- Body - Provides content needed for completing the current task. May include text and/or controls. Body text is always left aligned.
- Actions - Main actions for completing or canceling the dialog request. Button groupings will vary based on the dialogs purpose.
- Overlay - Obscures page content.

## Sizing

- Default - Browsers larger than 600px wide. Details are displayed horizontally. All content left aligned.
- Small - Browsers smaller than 600px wide. Details are stacked and displayed vertically.

### Breakpoints

- xs colspan 4 of 4.
- sm colspan 4 of 4.
- md colspan 4 of 4. Max height 72%.
- lg colspan 8 of 12. Max height 72%.
- xl colspan 8 of 12. Max hight 84%.
- xxl colspan 6 of 12. Max hight 84%.

## Accessibility

This modal uses React Bootstrap which has built in Aria/Accessability support. Please see the [documentation for additional information](https://react-bootstrap.github.io/components/modal/).

## API Notes

[Modal Props](https://react-bootstrap.github.io/components/modal/#modals-props)

## Versioning

## Test Coverage

## Considerations

- Modals are positioned over everything else in the document and remove scroll from the <body> so that modal content scrolls instead.
- Modals are unmounted when closed.
- Bootstrap only supports one modal window at a time. Nested modals aren’t supported, but if you really need them the underlying react-overlays can support them if you're willing.
- Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.
- Unlike vanilla Bootstrap, autoFocus works in Modals because React handles the implementation.

## Browser support

- We aim to support all browsers supported by both React and Bootstrap.

## Design Decisions

- Installed create react app for quick start.
- Added boilerplate .gitignore [Node gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore)
- Considered [React Modal](https://github.com/reactjs/react-modal#demos) for a more light weight install.
- Installed React Strap because of its [built in Modal component](https://react-bootstrap.github.io/components/modal/) it has Aria/Accessability support and customizable sizing options and API documentation.

## Modal @Todo

- Pull component from React Bootstrap to slim down dependencies.

## External Resources

- [Modality Is the One UX Concept That Most Designers Don’t Fully Understand](https://uxplanet.org/modality-the-one-ux-concept-you-need-to-understand-when-designing-intuitive-user-interfaces-e5e941c7acb1?gi=bf6e0e805509).
- [There's a fine line between being big and bold, and downright annoying. Here's how to design modals your users will actually enjoy.](https://www.appcues.com/blog/modal-dialog-windows).
- [Accessibility tips for web developers](https://web.dev/a11y-tips-for-web-dev/).
- [8 examples of great mobile modals that will delight and engage your app users](https://www.appcues.com/blog/mobile-app-modal-windows).