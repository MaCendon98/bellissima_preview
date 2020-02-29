import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const Impressum = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Impressum" keywords={[`impressum`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body-left">
          <h1>Impressum</h1>
          <p>
            <a href="javascript:gaOptout();">
              Hier klicken um Cookies zu deaktivieren.
            </a>
          </p>
          <p>
            Ornella Galati Rando und Giuseppa Giunta Magliari
            <br />
            Bellissima Nagelstudio
            <br />
            Podbielskistraße 113
            <br />
            30177 Hannover
          </p>
          <p>
            Telefon: <a href="tel:+4951139080588">051139080588 </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:info@bellissima-hannover.com">
              info@bellissima-hannover.com
            </a>
          </p>
          <p>
            <strong>
              gesetzliche Berufsbezeichnung der o. g. Inhaberinnen:
            </strong>
            Kosmetikerinnen und Nageldesignerinnen
          </p>
          <p>
            <strong>Umsatzsteuer-ID: </strong>25 128 01564
            <br />
            <strong>Zuständige Kammer:</strong>Industrie- und Handwerkskammer
            Hannover
            <br />
            Am Schiffgraben 4, 30175 Hannover
          </p>
          <p>
            <strong>Berufsrechtliche Regelungen:</strong>Handwerksordung, diese
            ist auf den Internetseiten der Handwerkskammer Hannover
            (www.hwk-hannover.de) einsehbar
          </p>
          <p>
            Aufsichtsbehörde: Landeshauptsdtadt Hannover &ndash; Fachbereich
            Recht und Ordnung | Leinstraße 14, 30175 Hannover
          </p>
          <h2>Disclaimer &ndash; rechtliche Hinweise</h2>
          <p>
            &sect; 1 Warnhinweis zu Inhalten
            <br />
            Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden
            mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
            übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der
            bereitgestellten kostenlosen und frei zugänglichen journalistischen
            Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben
            die Meinung des jeweiligen Autors und nicht immer die Meinung des
            Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei
            zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem
            Nutzer und dem Anbieter zustande, insoweit fehlt es am
            Rechtsbindungswillen des Anbieters.
          </p>
          <p>
            &sect; 2 Externe Links
            <br />
            Diese Website enthält Verknüpfungen zu Websites Dritter
            (&ldquo;externe Links&rdquo;). Diese Websites unterliegen der
            Haftung der jeweiligen Betreiber. Der Anbieter hat bei der
            erstmaligen Verknüpfung der externen Links die fremden Inhalte
            daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem
            Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat
            keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und
            auf die Inhalte der verknüpften Seiten. Das Setzen von externen
            Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis
            oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle
            der externen Links ist für den Anbieter ohne konkrete Hinweise auf
            Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen
            werden jedoch derartige externe Links unverzüglich gelöscht.
          </p>
          <p>
            &sect; 3 Urheber- und Leistungsschutzrechte
            <br />
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
            Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
            bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
            jeweiligen Rechteinhabers. Dies gilt insbesondere für
            Vervielfältigung, Bearbeitung, übersetzung, Einspeicherung,
            Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
            anderen elektronischen Medien und Systemen. Inhalte und Rechte
            Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
            Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
            Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
            von Kopien und Downloads für den persönlichen, privaten und nicht
            kommerziellen Gebrauch ist erlaubt.
          </p>
          <p>
            Die Darstellung dieser Website in fremden Frames ist nur mit
            schriftlicher Erlaubnis zulässig.
          </p>
          <p>
            &sect; 4 Besondere Nutzungsbedingungen
            <br />
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
            von den vorgenannten Paragraphen abweichen, wird an entsprechender
            Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
            jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
          </p>
          <p>
            Quelle:
            <a href="http://www.impressum-recht.de/impressum-generator/">
              Impressum-recht.de
            </a>
          </p>
          <h1>Datenschutzerklärung</h1>
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere
            der EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p>Ornella Galati Rando und Giuseppa Giunta Magliari</p>
          <p>Bellissima Nagelstudio</p>
          <p>Podbielskistraße 113</p>
          <p>30177 Hannover</p>
          <p>Telefon: 051139080588</p>
          <p>E-Mail: info@bellissima-hannover.com</p>
          <h2>Ihre Betroffenenrechte</h2>
          <p>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
            können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul>
            <li>
              Auskunft über Ihre bei uns gespeicherten Daten und deren
              Verarbeitung,
            </li>
            <li>Berichtigung unrichtiger personenbezogener Daten,</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
            <li>
              Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
              aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,
            </li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
            <li>
              Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
              eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.
            </li>
          </ul>
          <p>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Sie können sich jederzeit mit einer Beschwerde an die für Sie
            zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde
            richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder
            der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für
            den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:
            <a
              href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
            </a>
            .
          </p>
          <h2>
            Zwecke der Datenverarbeitung durch die verantwortliche Stelle und
            Dritte
          </h2>
          <p>
            Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser
            Datenschutzerklärung genannten Zwecken. Eine übermittlung Ihrer
            persönlichen Daten an Dritte zu anderen als den genannten Zwecken
            findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte
            weiter, wenn:
          </p>
          <ul>
            <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
            <li>
              die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen
              erforderlich ist,
            </li>
            <li>
              die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich ist,
            </li>
          </ul>
          <p>
            die Verarbeitung zur Wahrung berechtigter Interessen erforderlich
            ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes
            schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.
          </p>
          <h2>
            Erfassung allgemeiner Informationen beim Besuch unserer Website
          </h2>
          <p>
            Wenn Sie auf unsere Website zugreifen, werden automatisch mittels
            eines Cookies Informationen allgemeiner Natur erfasst. Diese
            Informationen (Server-Logfiles) beinhalten etwa die Art des
            Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
            Internet-Service-Providers und ähnliches. Hierbei handelt es sich
            ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre
            Person zulassen.
          </p>
          <p>
            Diese Informationen sind technisch notwendig, um von Ihnen
            angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen
            bei Nutzung des Internets zwingend an. Sie werden insbesondere zu
            folgenden Zwecken verarbeitet:
          </p>
          <ul>
            <li>
              Sicherstellung eines problemlosen Verbindungsaufbaus der Website,
            </li>
            <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
            <li>zu weiteren administrativen Zwecken.</li>
          </ul>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten basiert auf unserem
            berechtigten Interesse aus den vorgenannten Zwecken zur
            Datenerhebung. Wir verwenden Ihre Daten nicht, um Rückschlüsse auf
            Ihre Person zu ziehen. Empfänger der Daten sind nur die
            verantwortliche Stelle und ggf. Auftragsverarbeiter.
          </p>
          <p>
            Anonyme Informationen dieser Art werden von uns ggfs. statistisch
            ausgewertet, um unseren Internetauftritt und die dahinterstehende
            Technik zu optimieren.
          </p>
          <h2>Cookies</h2>
          <p>
            Wie viele andere Webseiten verwenden wir auch so genannte
            &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien, die von
            einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch
            erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse,
            verwendeter Browser, Betriebssystem und Ihre Verbindung zum
            Internet.
          </p>
          <p>
            Cookies können nicht verwendet werden, um Programme zu starten oder
            Viren auf einen Computer zu übertragen. Anhand der in Cookies
            enthaltenen Informationen können wir Ihnen die Navigation
            erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.
          </p>
          <p>
            In keinem Fall werden die von uns erfassten Daten an Dritte
            weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit
            personenbezogenen Daten hergestellt.
          </p>
          <p>
            Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies
            betrachten. Internet-Browser sind regelmäßig so eingestellt, dass
            sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung
            von Cookies jederzeit über die Einstellungen Ihres Browsers
            deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres
            Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern
            können. Bitte beachten Sie, dass einzelne Funktionen unserer Website
            möglicherweise nicht funktionieren, wenn Sie die Verwendung von
            Cookies deaktiviert haben.
          </p>
          <h2>SSL-Verschlüsselung</h2>
          <p>
            Um die Sicherheit Ihrer Daten bei der übertragung zu schützen,
            verwenden wir dem aktuellen Stand der Technik entsprechende
            Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
          </p>
          {/* <h2>Kontaktformular</h2>
          <p>
            Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder
            Kontaktformular mit uns in Kontakt, erteilen Sie uns zum Zwecke der
            Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die
            Angabe einer validen E-Mail-Adresse erforderlich. Diese dient der
            Zuordnung der Anfrage und der anschließenden Beantwortung derselben.
            Die Angabe weiterer Daten ist optional. Die von Ihnen gemachten
            Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für
            mögliche Anschlussfragen gespeichert. Nach Erledigung der von Ihnen
            gestellten Anfrage werden personenbezogene Daten automatisch
            gelöscht.
          </p> */}
          <h2>Verwendung von Google Analytics</h2>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Inc. (folgend: Google). Google Analytics verwendet sog.
            &bdquo;Cookies&ldquo;, also Textdateien, die auf Ihrem Computer
            gespeichert werden und die eine Analyse der Benutzung der Webseite
            durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen
            über Ihre Benutzung dieser Webseite werden in der Regel an einen
            Server von Google in den USA übertragen und dort gespeichert.
            Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten,
            wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten
            der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
            über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in
            Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
            in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers
            dieser Website wird Google diese Informationen benutzen, um Ihre
            Nutzung der Webseite auszuwerten, um Reports über die
            Webseitenaktivitäten zusammenzustellen und um weitere mit der
            Websitenutzung und der Internetnutzung verbundene Dienstleistungen
            gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von
            Google Analytics von Ihrem Browser übermittelte IP-Adresse wird
            nicht mit anderen Daten von Google zusammengeführt.
          </p>
          <p>
            Die Zwecke der Datenverarbeitung liegen in der Auswertung der
            Nutzung der Website und in der Zusammenstellung von Reports über
            Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website
            und des Internets sollen dann weitere verbundene Dienstleistungen
            erbracht werden. Die Verarbeitung beruht auf dem berechtigten
            Interesse des Webseitenbetreibers.
          </p>
          <p>
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich werden nutzen können. Sie
            können darüber hinaus die Erfassung der durch das Cookie erzeugten
            und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem sie das unter dem folgenden Link verfügbare
            Browser-Plugin herunterladen und installieren:
            <a
              href="http://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browser Add On zur Deaktivierung von Google Analytics
            </a>
            .
          </p>
          <p>
            Zusätzlich oder als Alternative zum Browser-Add-On können Sie das
            Tracking durch Google Analytics auf unseren Seiten unterbinden,
            indem Sie
            <a
              title="Google Analytics Opt-Out-Cookie setzen"
              href="https://bellissima-hannover.com/impressum/#"
            >
              diesen Link anklicken
            </a>
            . Dabei wird ein Opt-Out-Cookie auf Ihrem Gerät installiert. Damit
            wird die Erfassung durch Google Analytics für diese Website und für
            diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem
            Browser installiert bleibt.
          </p>
          <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
          <p>
            Um unsere Inhalte browserübergreifend korrekt und grafisch
            ansprechend darzustellen, verwenden wir auf dieser Website
            Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts
            (
            <a
              href="http://www.google.com/webfonts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.google.com/webfonts/
            </a>
            ). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den
            Cache Ihres Browsers übertragen. Falls der Browser die Google
            Webfonts nicht unterstützt oder den Zugriff unterbindet, werden
            Inhalte in einer Standardschrift angezeigt.
          </p>
          <p>
            Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst
            automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei
            ist es theoretisch möglich &ndash; aktuell allerdings auch unklar ob
            und ggf. zu welchen Zwecken &ndash; dass Betreiber entsprechender
            Bibliotheken Daten erheben.
          </p>
          <p>
            Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie
            hier:
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.google.com/policies/privacy/
            </a>
          </p>
          <h2>Verwendung von Google Maps</h2>
          <p>
            Diese Webseite verwendet Google Maps API, um geographische
            Informationen visuell darzustellen. Bei der Nutzung von Google Maps
            werden von Google auch Daten über die Nutzung der Kartenfunktionen
            durch Besucher erhoben, verarbeitet und genutzt. Nähere
            Informationen über die Datenverarbeitung durch Google können Sie
            <a
              href="http://www.google.com/privacypolicy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              den Google-Datenschutzhinweisen
            </a>
            entnehmen. Dort können Sie im Datenschutzcenter auch Ihre
            persönlichen Datenschutz-Einstellungen verändern.
          </p>
          <p>
            Ausführliche Anleitungen zur Verwaltung der eigenen Daten im
            Zusammenhang mit Google-Produkten
            <a
              href="http://www.dataliberation.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              finden Sie hier
            </a>
            .
          </p>
          {/* <h2>Google AdWords</h2>
          <p>
            Unsere Webseite nutzt das Google Conversion-Tracking. Sind Sie über
            eine von Google geschaltete Anzeige auf unsere Webseite gelangt,
            wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das
            Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf
            eine von Google geschaltete Anzeige klickt. Diese Cookies verlieren
            nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen
            Identifizierung. Besucht der Nutzer bestimmte Seiten unserer Website
            und das Cookie ist noch nicht abgelaufen, können wir und Google
            erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser
            Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein
            anderes Cookie. Cookies können somit nicht über die Websites von
            AdWords-Kunden nachverfolgt werden. Die mithilfe des
            Conversion-Cookies eingeholten Informationen dienen dazu,
            Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für
            Conversion-Tracking entschieden haben. Die Kunden erfahren die
            Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu
            einer mit einem Conversion-Tracking-Tag versehenen Seite
            weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit
            denen sich Nutzer persönlich identifizieren lassen.
          </p>
          <p>
            Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür
            erforderliche Setzen eines Cookies ablehnen &ndash; etwa per
            Browser-Einstellung, die das automatische Setzen von Cookies
            generell deaktiviert oder Ihren Browser so einstellen, dass Cookies
            von der Domain &bdquo;googleleadservices.com&ldquo; blockiert
            werden.
          </p>
          <p>
            Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen
            dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen. Haben
            Sie alle Ihre Cookies im Browser gelöscht, müssen Sie das jeweilige
            Opt-out Cookie erneut setzen.
          </p> */}
          <h3>Änderung unserer Datenschutzbestimmungen</h3>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
            erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Impressum location={props.location} data={data} {...props} />
    )}
  />
);
