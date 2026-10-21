# UltraAlarm for Android 公式サイト

- 構成: 日本語のトップは `index.html`、各案内は `privacy.html`・`terms.html`・`licenses.html`・`contact.html`、英語版は `en/` にあります。共通の CSS・アイコン・問い合わせ先設定は `assets/`、ライセンス全文は `assets/licenses/`、見つからないページの案内は `404.html` です。HTML/CSS をそのまま配信するため、ビルドは不要です。問い合わせ先は `assets/contact.js` の `CONTACT_EMAIL` コメント直下で設定します。
- 独自ドメインを使うときは、このディレクトリにドメイン名を記した `CNAME` ファイルを置いてください。
