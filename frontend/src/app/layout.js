export const metadata = {
  title: 'User App',
  description: 'User CRUD with Next.js and MongoDB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
