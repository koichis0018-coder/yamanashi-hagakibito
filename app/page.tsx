// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="山梨はがきびとの集い トップへ">
          <span className="brand-mark">〒</span>
          <span>山梨はがきびとの集い</span>
        </a>
        <nav aria-label="メインメニュー">
          <a href="#about">はがきびととは</a>
          <a href="#gathering">集いについて</a>
          <a href="#next">次回のご案内</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true">
          <img src="./hero-watercolor.png?v=4" alt="" fetchPriority="high" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">NOW, HERE, TO SOMEONE.</p>
          <h1>一枚のはがきから、<br />ご縁がはじまる。</h1>
          <p className="hero-lead">
              今、心に浮かんだ人へ一枚を書く。<br className="desktop-break" />
              その瞬間から、ご縁は動きはじめます。
          </p>
          <a className="primary-button" href="#next">次回の集いを見る <Arrow /></a>
        </div>
        <div className="hand-note" aria-hidden="true">今日、心に浮かんだ人へ。</div>
        <a className="scroll-cue" href="#about">SCROLL <span>↓</span></a>
      </section>

      <section className="section intro" id="about">
        <div className="section-label"><span>01</span> はがきびと、とは。</div>
        <div className="intro-grid">
          <h2>うまく書く人、<br />ではありません。</h2>
          <div className="prose">
            <p className="large-copy">
              誰かを思い、言葉を選び、<br />一枚のはがきに心を託す人です。
            </p>
            <p>
              はがきは、たった一枚の小さな紙。けれど、そこに手で書かれた言葉は、
              人と人を結び、離れていた時間をつなぎ、思いがけないご縁を育てます。
            </p>
            <p>
              字の上手下手や、特別な作法が先にあるのではありません。
              今、この瞬間に浮かんだ一人を思って書くこと。その小さな行動から、自分の生き方にも向き合っていく。
              私たちは、そんな人を「はがきびと」と呼んでいます。
            </p>
          </div>
        </div>
      </section>

      <section className="roots" id="practice" aria-labelledby="roots-title">
        <div className="roots-inner">
          <p className="eyebrow light">THE PRACTICE, NOW</p>
          <h2 id="roots-title">書くことは、<br />今を生きること。</h2>
          <div className="roots-grid">
            <article>
              <span className="root-number">一</span>
              <h3>氣づく</h3>
              <p>今、心に浮かんだ人や、今日受け取った喜びに氣づく。すべてはここから始まります。</p>
            </article>
            <article>
              <span className="root-number">二</span>
              <h3>書く</h3>
              <p>上手な文章より、今の自分の言葉を一枚に託す。思いを、今日のうちに行動へ変える。</p>
            </article>
            <article>
              <span className="root-number">三</span>
              <h3>ひらく</h3>
              <p>一枚が相手の心をひらき、新しいご縁や、まだ見ぬ明日へとつながっていく。</p>
            </article>
          </div>
          <p className="roots-note">
            故・坂田道信氏が実践した「ハガキ道」と、半田正興氏をはじめ全国へ広がったご縁の輪。
            その歩みは、昔を懐かしむためのものではありません。
            「はがきびとの集い」は、受け取った心を今の自分の一枚に変え、ここから新しいご縁をひらく場です。
          </p>
        </div>
      </section>

      <section className="section gathering" id="gathering">
        <div className="section-label"><span>02</span> 山梨はがきびとの集い</div>
        <div className="gathering-grid">
          <div className="postcard-stack" aria-hidden="true">
            <div className="postcard back-card" />
            <div className="postcard front-card">
              <span className="stamp">甲斐</span>
              <p>ご縁の数だけ、<br />人生は豊かになる。</p>
              <i>Yamanashi</i>
            </div>
          </div>
          <div className="prose gathering-copy">
            <h2>初めての人も、<br />久しぶりの人も。</h2>
            <p>
              はがきを長く書き続けている方だけの会ではありません。
              「誰かに書いてみたい」「はがきのある暮らしを知りたい」。
              その氣持ちがあれば、どなたでもお越しいただけます。
            </p>
            <p>
              体験や実践を語る講話、全国のはがきびととの交流、そして今の思いを一枚にする時間。
              山梨の地から、世代や肩書きを越えた新しいご縁が動き出します。
            </p>
          </div>
        </div>
      </section>

      <section className="next-event" id="next">
        <div className="event-card">
          <div className="event-heading">
            <p className="eyebrow">NEXT GATHERING</p>
            <h2>第4回<br />山梨はがきびとの集い</h2>
            <span className="status">開催決定</span>
          </div>
          <dl className="event-details">
            <div><dt>開催日</dt><dd>2026年12月5日（土）</dd></div>
            <div><dt>時　間</dt><dd>13時30分または14時 開始予定</dd></div>
            <div><dt>会　場</dt><dd>韮崎市民交流センター ニコリ<br /><small>山梨県韮崎市若宮1丁目2-50</small></dd></div>
            <div><dt>参加費</dt><dd>500円</dd></div>
            <div>
              <dt>申込み</dt>
              <dd>
                原則、はがきにてお申し込みください。<br />
                <small>初めて参加される方に限り、Instagram・Facebook・メールでも受け付けます。</small>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">ONE POSTCARD, ONE CONNECTION.</p>
        <h2>いま、心に浮かんだ人は<br />誰ですか。</h2>
        <p>その人を思った「今」が、はがきびとの一歩です。</p>
        <a className="text-link" href="#top">ページのはじめへ <span>↑</span></a>
      </section>

      <footer>
        <p>山梨はがきびとの集い</p>
        <p>代表世話人　嶋津 光一</p>
        <small>© 山梨はがきびとの集い</small>
      </footer>
    </main>
  );
}
