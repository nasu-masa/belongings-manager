<x-mail::message>
# パスワードのリセット

{{ $user->name }} 様

パスワードリセットのリクエストを受け付けました。

以下のボタンをクリックして、パスワードをリセットしてください。

<x-mail::button :url="$resetUrl" color="primary">
パスワードをリセットする
</x-mail::button>

このリンクの有効期限は {{ $expire }} 分です。

このリクエストに心当たりがない場合は、このメールを無視してください。

よろしくお願いいたします。
{{ config('app.name') }}
</x-mail::message>
