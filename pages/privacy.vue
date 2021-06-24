<template>
  <div class="warpper">
    <section class="privacy unit">
        <h2 class="privacy__title"><span class="span">PEIVACY.POLICY</span><br>プライバシーポリシー</h2>
        <p class="breadcrumb"><nuxt-link to="/">TOP</nuxt-link> > PEIVACY.POLICY</p>
      <div class="privacy-text ff-n">
        <div class="privacy-text1">
          <p>
            本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
          </p>
        </div>
        <div class="privacy-text2">
          <p class="title">&#10063;第1条（個人情報）</p>
          <p>
            「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </p>
        </div>

        <div class="privacy-text2">
          <p class="title">&#10063;第2条（個人情報の収集方法）</p>
          <p>
            当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
          </p>
        </div>

        <div class="privacy-text2">
          <p class="title">&#10063;第3条（個人情報を収集・利用する目的）</p>
          <p>
            当社が個人情報を収集・利用する目的は，以下のとおりです。<br />
            1.当社サービスの提供・運営のため<br />
            2.ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）<br />
            3.ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため<br />
            4.メンテナンス，重要なお知らせなど必要に応じたご連絡のため<br />
            5.利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため<br />
            6.ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため<br />
            7.有料サービスにおいて，ユーザーに利用料金を請求するため<br />
            8.上記の利用目的に付随する目的
          </p>
        </div>

        <div class="privacy-text2">
          <p class="title">&#10063;第4条（利用目的の変更）</p>
          <p>
            当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。<br />利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
          </p>
        </div>

        <div class="privacy-text2">
          <p class="title">&#10063;第5条（個人情報の第三者提供）</p>
          <p>
            当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。<br />人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき<br />公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき<br />国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき<br />予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき<br />
          </p>
        </div>

        <div class="privacy-text2">
          <p class="title">&#10063;第6条（プライバシーポリシーの変更）</p>
          <p>
            本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。<br />
            当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: " プライバシーポリシー - ",
      meta:[
        { hid: 'description', name: 'description', content: 'プライバシーポリシーを記載しています。群馬県にて活動しているWEB屋。' },
        { hid: 'og:description', property: 'og:description', content: 'プライバシーポリシーを記載しています。群馬県にて活動しているWEB屋。' },
      ]
    };
  }
};
</script>

<style lang="scss">

.privacy {
  font-size: 1.6rem;
  margin: 20rem auto;
  line-height: 1.7;
  @include sp {
    font-size: 1.4rem;
    margin: 10rem auto;
  }
    &__title {
    font-size: 1.4rem;
    line-height: 1.6;
    position: relative;
    z-index: 1;
    @include sp {
      font-size: 1.2rem;
    }
    .span {
      font-size: 7rem;
      @include sp {
        font-size: 3rem;
      }
    }
  }
  .breadcrumb {
    font-size: 1.4rem;
    margin-bottom: 5rem;
    @include sp {
      font-size: 1.1rem;
    }
    a {
      color: #2a9963;
    }
  }
  &-text1 {
    margin: 2rem 0;
    font-weight: 500;
  }
  &-text2 {
    margin: 3rem 0 4rem 0;
    font-weight: 300;
  }
  .title {
    font-size: 2rem;
    font-weight: 500;
    @include sp {
      font-size: 1.5rem;
    }
  }
}
</style>