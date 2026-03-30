import type { ActiveLocale } from "@/config/locales";
import type { GlobalPageContent, GlobalPageSection, PortableTextBlock } from "@/types/content";

interface PrivacyLocaleContent {
 title: string;
 eyebrow: string;
 description: string;
 lastUpdated: string;
 whoWeAreTitle: string;
 whoWeAreBody: string;
 whatDataTitle: string;
 directDataTitle: string;
 directDataBody: string;
 automaticDataTitle: string;
 automaticDataBody: string;
 sharingTitle: string;
 sharingBody: string;
 transfersTitle: string;
 transfersBody: string;
 rightsTitle: string;
 rightsBody: string;
 complaintTitle: string;
 complaintBody: string;
 securityTitle: string;
 securityBody: string;
 childrenTitle: string;
 childrenBody: string;
 linksTitle: string;
 linksBody: string;
 changesTitle: string;
 changesBody: string;
 contactTitle: string;
 contactBody: string;
}

function paragraphBlock(text: string, key: string): PortableTextBlock {
 return {
 _type: "block",
 _key: key,
 style: "normal",
 children: [{ _type: "span", _key: `${key}-span`, text }],
 };
}

function buildSections(content: PrivacyLocaleContent): GlobalPageSection[] {
 return [
 {
 title: content.whatDataTitle,
 tone: "band",
 layout: "utility",
 cards: [
 { eyebrow: "2.1", title: content.directDataTitle, body: content.directDataBody },
 { eyebrow: "2.2", title: content.automaticDataTitle, body: content.automaticDataBody },
 ],
 },
 { title: content.sharingTitle, layout: "utility", cards: [{ title: content.sharingTitle, body: content.sharingBody }] },
 { title: content.transfersTitle, layout: "utility", cards: [{ title: content.transfersTitle, body: content.transfersBody }] },
 { title: content.rightsTitle, layout: "utility", cards: [{ title: content.rightsTitle, body: content.rightsBody }] },
 { title: content.complaintTitle, layout: "utility", cards: [{ title: content.complaintTitle, body: content.complaintBody }] },
 { title: content.securityTitle, layout: "utility", cards: [{ title: content.securityTitle, body: content.securityBody }] },
 { title: content.childrenTitle, layout: "utility", cards: [{ title: content.childrenTitle, body: content.childrenBody }] },
 { title: content.linksTitle, layout: "utility", cards: [{ title: content.linksTitle, body: content.linksBody }] },
 { title: content.changesTitle, layout: "utility", cards: [{ title: content.changesTitle, body: content.changesBody }] },
 { title: content.contactTitle, layout: "utility", cards: [{ title: content.contactTitle, body: content.contactBody }] },
 ];
}

const privacyContentByLocale: Record<ActiveLocale, PrivacyLocaleContent> = {
 pt: {
 title: "Política de Privacidade",
 eyebrow: "Privacidade e protecção de dados",
 description: "Política de privacidade do MoldCheck.pt, enquadrada pelo RGPD, Lei 58/2019 e Lei 41/2004, com informação clara sobre contactos, pagamentos, newsletter, downloads gratuitos e cookies necessários.",
 lastUpdated: "Última actualização: 10 de março de 2026",
 whoWeAreTitle: "1. Quem somos",
 whoWeAreBody: "O MoldCheck.pt é gerido pelo FAIRBANK Group (designado nesta política como “nós”, “nos” ou “o responsável pelo tratamento”).\n\nResponsável pelo tratamento de dados:\nFAIRBANK Group, Lda.\n[Morada registada]\nLisboa, Portugal\nNIF: [número]\nContacto: info@moldcheck.pt\n\nO MoldCheck.pt é um website editorial independente dedicado a temas de humidade, bolor e qualidade do ar interior. O site pode também disponibilizar fluxos de marcação ou pagamento para inspecções, análises laboratoriais ou recursos digitais através de prestadores de pagamento terceiros, como a Stripe. Não recolhemos dados de saúde de forma activa.",
 whatDataTitle: "2. Que dados recolhemos",
 directDataTitle: "Dados que nos fornece directamente",
 directDataBody: "Formulário de contacto ou contacto por email:\n Endereço de e-mail\n Nome (opcional)\n Conteúdo da mensagem\n\nFinalidade: responder à sua mensagem.\nBase jurídica: consentimento (artigo 6.º, n.º 1, alínea a) do RGPD).\nConservação: 12 meses após a última comunicação, salvo obrigação legal de conservação mais longa.\n\nSubscrição de newsletter:\n Endereço de e-mail\n Idioma preferido\n Data de subscrição\n\nFinalidade: envio de actualizações editoriais sobre bolor, humidade e qualidade do ar interior em Portugal.\nBase jurídica: consentimento (artigo 6.º, n.º 1, alínea a) do RGPD).\nConservação: até cancelamento da subscrição + 30 dias para processamento técnico.\n\nDownload de conteúdo gratuito (PDF / checklist):\n Endereço de e-mail\n\nFinalidade: envio do documento solicitado e entrada automática na sequência de emails associada ao recurso descarregado.\nBase jurídica: consentimento e/ou execução de medidas pré-contratuais ou contratuais, conforme aplicável.\n\nCompras, reservas ou pagamentos (se aplicável):\n Nome\n Endereço de e-mail\n Dados necessários para concluir a reserva ou compra\n Informação transaccional limitada\n\nOs pagamentos são processados por prestadores de pagamento terceiros, como a Stripe. O MoldCheck.pt não armazena os dados completos do cartão de pagamento.",
 automaticDataTitle: "Dados recolhidos automaticamente",
 automaticDataBody: "Análise de tráfego (Plausible Analytics):\nO MoldCheck.pt utiliza o Plausible Analytics, uma ferramenta de análise que não utiliza cookies, não recolhe dados pessoais identificáveis e não cria perfis de utilizador.\n\nOs dados recolhidos podem incluir: páginas visitadas, país aproximado, referenciador (URL de origem) e tipo de dispositivo. Nenhum destes dados é pessoal identificável.\n\nO Plausible não requer consentimento ao abrigo do RGPD ou da Lei n.º 41/2004 porque não processa dados pessoais identificáveis.\n\nCookies necessários:\n Cookie de preferência de idioma: armazena a língua seleccionada pelo utilizador. Duração: 365 dias. Não requer consentimento.\n Cookie de sessão: gestão de sessão técnica. Duração: sessão. Não requer consentimento.\n\nNão utilizamos cookies de publicidade, cookies de rastreamento de terceiros, pixels de redes sociais nem ferramentas de análise que recolham dados pessoais sem consentimento.",
 sharingTitle: "3. Partilha de dados com terceiros",
 sharingBody: "Não vendemos, alugamos nem cedemos os seus dados pessoais a terceiros para fins de marketing.\n\nOs seus dados podem ser partilhados com:\n\nPrestadores de serviços técnicos (subcontratantes nos termos do artigo 28.º do RGPD), tais como:\n\nfornecedor de alojamento do website\n\nplataforma de e-mail / newsletter\n\nPlausible Analytics\n\nStripe ou outro prestador de pagamentos\n\noutros fornecedores estritamente necessários para operar reservas, downloads ou formulários\n\nEntidades legais: divulgaremos dados pessoais às autoridades competentes se legalmente obrigados a fazê-lo (artigo 6.º, n.º 1, alínea c) do RGPD).",
 transfersTitle: "4. Transferências internacionais de dados",
 transfersBody: "Os dados pessoais são tratados preferencialmente na União Europeia. Se um prestador de serviços tratar dados fora da UE/EEE, garantimos que exista:\n\numa decisão de adequação da Comissão Europeia, ou\n\nCláusulas Contratuais-Tipo (Standard Contractual Clauses SCC) aprovadas pela Comissão Europeia.",
 rightsTitle: "5. Os seus direitos",
 rightsBody: "Ao abrigo do RGPD e da Lei n.º 58/2019, tem os seguintes direitos:\n\n— Direito de acesso (artigo 15.º do RGPD): saber que dados pessoais seus tratamos e obter uma cópia desses dados.\n\n— Direito de rectificação (artigo 16.º): pedir a correcção de dados inexactos ou incompletos.\n\n— Direito ao apagamento (artigo 17.º): solicitar a eliminação dos seus dados pessoais (\"direito a ser esquecido\"), quando aplicável.\n\n— Direito à limitação do tratamento (artigo 18.º): pedir a suspensão do tratamento dos seus dados em determinadas circunstâncias.\n\n— Direito à portabilidade dos dados (artigo 20.º): receber os seus dados num formato estruturado, de uso corrente e legível por máquina, ou solicitar a sua transmissão a outro responsável pelo tratamento, quando tecnicamente possível.\n\n— Direito de oposição (artigo 21.º): opor-se ao tratamento baseado em interesses legítimos.\n\n— Direito de retirar o consentimento: em qualquer momento, sem comprometer a licitude do tratamento efectuado com base no consentimento antes da sua retirada.\n\nPara exercer qualquer destes direitos: privacidade@moldcheck.pt\n\nResponderemos no prazo de 30 dias. Em casos complexos, poderemos prorrogar este prazo até 60 dias, informando-o dessa extensão.",
 complaintTitle: "6. Apresentação de reclamação à autoridade de controlo",
 complaintBody: "Se considerar que o tratamento dos seus dados pessoais viola o RGPD, tem o direito de apresentar reclamação à:\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisboa\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nPode também apresentar reclamação junto da autoridade de controlo do seu país de residência, se aplicável.",
 securityTitle: "7. Segurança",
 securityBody: "Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, divulgação, alteração ou destruição, incluindo transmissão cifrada (HTTPS/TLS), controlo de acesso e backups regulares.\n\nNenhum sistema é absolutamente seguro. Em caso de violação de dados com risco para os titulares, notificaremos a CNPD no prazo legal aplicável e, quando necessário, os titulares afectados sem demora injustificada.",
 childrenTitle: "8. Crianças",
 childrenBody: "Este website não é dirigido a menores de 16 anos. Não recolhemos intencionalmente dados pessoais de menores. Se tomarmos conhecimento de que um menor nos forneceu dados, eliminaremos esses dados logo que razoavelmente possível.",
 linksTitle: "9. Ligações externas",
 linksBody: "Este website contém ligações para websites externos, incluindo InspectOS.pt e PropCheck.pt. Não somos responsáveis pelas práticas de privacidade desses websites. Recomendamos a consulta das respectivas políticas de privacidade.",
 changesTitle: "10. Alterações a esta política",
 changesBody: "Podemos actualizar esta política. A data da última actualização está indicada no topo desta página. Em caso de alterações materiais, publicaremos um aviso visível no website.",
 contactTitle: "11. Contacto",
 contactBody: "Para qualquer questão sobre esta política ou sobre o tratamento dos seus dados: info@moldcheck.pt",
 },
 en: {
 title: "Privacy Policy",
 eyebrow: "Privacy and data protection",
 description: "MoldCheck.pt privacy policy under the GDPR, Portuguese Law 58/2019 and Law 41/2004, covering contact flows, payments, newsletter, gated free downloads and necessary cookies.",
 lastUpdated: "Last updated: 10 March 2026",
 whoWeAreTitle: "1. Who we are",
 whoWeAreBody: "MoldCheck.pt is operated by FAIRBANK Group (referred to in this policy as “we”, “us” or “the data controller”).\n\nData controller:\nFAIRBANK Group, Lda.\n[Registered address]\nLisbon, Portugal\nTax ID (NIF): [number]\nContact: info@moldcheck.pt\n\nMoldCheck.pt is an independent editorial website focused on damp, mold, and indoor air quality. The site may also offer booking or payment flows for inspections, laboratory analysis, or digital resources through third-party payment providers such as Stripe. We do not actively collect health data.",
 whatDataTitle: "2. What data we collect",
 directDataTitle: "Data you provide directly",
 directDataBody: "Contact form or email enquiries:\n Email address\n Name (optional)\n Message content\n\nPurpose: to respond to your message.\nLegal basis: consent (Article 6(1)(a) GDPR).\nRetention: 12 months after the last communication, unless a longer legal retention obligation applies.\n\nNewsletter subscription:\n Email address\n Preferred language\n Subscription date\n\nPurpose: sending editorial updates about mold, damp, and indoor air quality in Portugal.\nLegal basis: consent (Article 6(1)(a) GDPR).\nRetention: until unsubscribe + 30 days for technical processing.\n\nFree content download (PDF / checklist):\n Email address\n\nPurpose: delivering the requested document and automatically entering the user into the email sequence associated with that downloaded resource.\nLegal basis: consent and/or performance of pre-contractual or contractual steps, as applicable.\n\nPurchases, bookings, or payments (if applicable):\n Name\n Email address\n Data necessary to complete the booking or purchase\n Limited transaction information\n\nPayments are processed by third-party payment providers such as Stripe. MoldCheck.pt does not store full payment card details.",
 automaticDataTitle: "Automatically collected data",
 automaticDataBody: "Traffic analytics (Plausible Analytics):\nMoldCheck.pt uses Plausible Analytics, an analytics tool that uses no cookies, collects no personally identifiable data, and creates no user profiles.\n\nData collected may include: pages visited, approximate country, referrer URL, and device type. None of this data is personally identifiable.\n\nPlausible does not require consent under the GDPR or Portuguese Law 41/2004 because it does not process personally identifiable data.\n\nNecessary cookies:\n Language preference cookie: stores the user’s selected language. Duration: 365 days. No consent required.\n Session cookie: technical session management. Duration: session. No consent required.\n\nWe do not use advertising cookies, third-party tracking cookies, social media pixels, or analytics tools that collect personal data without consent.",
 sharingTitle: "3. Sharing data with third parties",
 sharingBody: "We do not sell, rent, or transfer your personal data to third parties for marketing purposes.\n\nYour data may be shared with:\n\nTechnical service providers (data processors under Article 28 GDPR), such as:\n\nwebsite hosting provider\n\nemail / newsletter platform\n\nPlausible Analytics\n\nStripe or other payment providers\n\nother suppliers strictly necessary to operate bookings, downloads, or forms\n\nLegal authorities: we will disclose personal data to competent authorities if legally required to do so (Article 6(1)(c) GDPR).",
 transfersTitle: "4. International data transfers",
 transfersBody: "Personal data is processed preferably within the European Union. Where a service provider processes data outside the EU/EEA, we ensure that either:\n\na European Commission adequacy decision is in place, or\n\nStandard Contractual Clauses (SCCs) approved by the European Commission are in force.",
 rightsTitle: "5. Your rights",
 rightsBody: "Under the GDPR and Portuguese Law 58/2019, you have the following rights:\n\n— Right of access (Article 15 GDPR): to know what personal data we process about you and to obtain a copy.\n\n— Right to rectification (Article 16): to request correction of inaccurate or incomplete data.\n\n— Right to erasure (Article 17): to request deletion of your personal data (\"right to be forgotten\"), where applicable.\n\n— Right to restriction of processing (Article 18): to request suspension of processing in certain circumstances.\n\n— Right to data portability (Article 20): to receive your data in a structured, commonly used, machine-readable format, or to request its transfer to another controller, where technically feasible.\n\n— Right to object (Article 21): to object to processing based on legitimate interests.\n\n— Right to withdraw consent: at any time, without affecting the lawfulness of processing carried out before withdrawal.\n\nTo exercise any of these rights: privacidade@moldcheck.pt\n\nWe will respond within 30 days. In complex cases, this period may be extended to 60 days, and you will be informed of the extension.",
 complaintTitle: "6. Right to lodge a complaint",
 complaintBody: "If you believe our processing of your personal data violates the GDPR, you have the right to lodge a complaint with:\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisbon\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nYou may also lodge a complaint with the supervisory authority in your country of residence, where applicable.",
 securityTitle: "7. Security",
 securityBody: "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration, or destruction, including encrypted transmission (HTTPS/TLS), access controls, and regular backups.\n\nNo system is absolutely secure. In the event of a data breach posing risk to individuals, we will notify the CNPD within the applicable legal timeframe and, where necessary, affected individuals without undue delay.",
 childrenTitle: "8. Children",
 childrenBody: "This website is not directed at persons under 16 years of age. We do not knowingly collect personal data from minors. If we become aware that a minor has provided us with data, we will delete it as soon as reasonably possible.",
 linksTitle: "9. External links",
 linksBody: "This website contains links to external websites, including InspectOS.pt and PropCheck.pt. We are not responsible for the privacy practices of those websites. Please consult their respective privacy policies.",
 changesTitle: "10. Changes to this policy",
 changesBody: "We may update this policy. The date of the latest update is shown at the top of this page. In the event of material changes, we will publish a visible notice on the website.",
 contactTitle: "11. Contact",
 contactBody: "For any question about this policy or about the processing of your data: info@moldcheck.pt",
 },
 fr: {
 title: "Politique de confidentialité",
 eyebrow: "Confidentialité et protection des données",
 description: "Politique de confidentialité de MoldCheck.pt au regard du RGPD, de la loi portugaise 58/2019 et de la loi 41/2004, couvrant contacts, paiements, newsletter, téléchargements gratuits et cookies nécessaires.",
 lastUpdated: "Dernière mise à jour : 10 mars 2026",
 whoWeAreTitle: "1. Qui nous sommes",
 whoWeAreBody: "MoldCheck.pt est géré par le FAIRBANK Group (désigné dans cette politique comme « nous », « nos » ou « le responsable du traitement »).\n\nResponsable du traitement :\nFAIRBANK Group, Lda.\n[Adresse enregistrée]\nLisbonne, Portugal\nNIF : [numéro]\nContact : info@moldcheck.pt\n\nMoldCheck.pt est un site éditorial indépendant consacré à l’humidité, aux moisissures et à la qualité de l’air intérieur. Le site peut également proposer des réservations ou des paiements pour des inspections, des analyses de laboratoire ou des ressources numériques via des prestataires de paiement tiers tels que Stripe. Nous ne collectons pas activement de données de santé.",
 whatDataTitle: "2. Données que nous collectons",
 directDataTitle: "Données que vous fournissez directement",
 directDataBody: "Formulaire de contact ou demandes par e-mail :\n Adresse e-mail\n Nom (facultatif)\n Contenu du message\n\nFinalité : répondre à votre message.\nBase juridique : consentement (article 6, paragraphe 1, point a) du RGPD).\nConservation : 12 mois après le dernier échange, sauf obligation légale de conservation plus longue.\n\nAbonnement à la newsletter :\n Adresse e-mail\n Langue préférée\n Date d’abonnement\n\nFinalité : envoi de mises à jour éditoriales sur les moisissures, l’humidité et la qualité de l’air intérieur au Portugal.\nBase juridique : consentement (article 6, paragraphe 1, point a) du RGPD).\nConservation : jusqu’à la désinscription + 30 jours pour le traitement technique.\n\nTéléchargement de contenu gratuit (PDF / checklist) :\n Adresse e-mail\n\nFinalité : envoi du document demandé et inscription automatique de l’utilisateur à la séquence d’e-mails associée à cette ressource téléchargée.\nBase juridique : consentement et/ou exécution de mesures précontractuelles ou contractuelles, selon le cas.\n\nAchats, réservations ou paiements (le cas échéant) :\n Nom\n Adresse e-mail\n Données nécessaires pour finaliser la réservation ou l’achat\n Informations transactionnelles limitées\n\nLes paiements sont traités par des prestataires de paiement tiers tels que Stripe. MoldCheck.pt ne stocke pas les données complètes de carte bancaire.",
 automaticDataTitle: "Données collectées automatiquement",
 automaticDataBody: "Analyse du trafic (Plausible Analytics) :\nMoldCheck.pt utilise Plausible Analytics, un outil d’analyse qui n’utilise pas de cookies, ne collecte pas de données personnelles identifiables et ne crée pas de profils utilisateurs.\n\nLes données collectées peuvent inclure : pages visitées, pays approximatif, URL de provenance et type d’appareil. Aucune de ces données n’est personnellement identifiable.\n\nPlausible ne nécessite pas de consentement au titre du RGPD ou de la loi portugaise 41/2004, car il ne traite pas de données personnelles identifiables.\n\nCookies nécessaires :\n Cookie de préférence linguistique : stocke la langue sélectionnée par l’utilisateur. Durée : 365 jours. Aucun consentement requis.\n Cookie de session : gestion technique de session. Durée : session. Aucun consentement requis.\n\nNous n’utilisons pas de cookies publicitaires, de cookies tiers de suivi, de pixels de réseaux sociaux ou d’outils d’analyse collectant des données personnelles sans consentement.",
 sharingTitle: "3. Partage des données avec des tiers",
 sharingBody: "Nous ne vendons, ne louons ni ne cédons vos données personnelles à des tiers à des fins marketing.\n\nVos données peuvent être partagées avec :\n\nPrestataires de services techniques (sous-traitants au sens de l’article 28 du RGPD), tels que :\n\nhébergeur du site\n\nplateforme e-mail / newsletter\n\nPlausible Analytics\n\nStripe ou autres prestataires de paiement\n\nautres fournisseurs strictement nécessaires au fonctionnement des réservations, téléchargements ou formulaires\n\nAutorités légales : nous divulguerons des données personnelles aux autorités compétentes si la loi nous y oblige (article 6, paragraphe 1, point c) du RGPD).",
 transfersTitle: "4. Transferts internationaux de données",
 transfersBody: "Les données personnelles sont traitées de préférence dans l’Union européenne. Si un prestataire traite des données en dehors de l’UE/EEE, nous veillons à ce qu’il existe :\n\nune décision d’adéquation de la Commission européenne, ou\n\ndes Clauses Contractuelles Types (CCT / SCC) approuvées par la Commission européenne.",
 rightsTitle: "5. Vos droits",
 rightsBody: "Au titre du RGPD et de la loi portugaise 58/2019, vous disposez des droits suivants :\n\ndroit d’accès\n\ndroit de rectification\n\ndroit à l’effacement\n\ndroit à la limitation du traitement\n\ndroit à la portabilité des données\n\ndroit d’opposition\n\ndroit de retirer votre consentement à tout moment\n\nPour exercer l’un de ces droits : info@moldcheck.pt\n\nNous répondrons dans un délai de 30 jours. Dans les cas complexes, ce délai peut être porté à 60 jours, et vous en serez informé.",
 complaintTitle: "6. Réclamation auprès de l’autorité de contrôle",
 complaintBody: "Si vous estimez que le traitement de vos données personnelles viole le RGPD, vous avez le droit d’introduire une réclamation auprès de :\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisbonne\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nVous pouvez également introduire une réclamation auprès de l’autorité de contrôle de votre pays de résidence, le cas échéant.",
 securityTitle: "7. Sécurité",
 securityBody: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre l’accès non autorisé, la divulgation, l’altération ou la destruction, notamment la transmission chiffrée (HTTPS/TLS), le contrôle d’accès et des sauvegardes régulières.\n\nAucun système n’est absolument sûr. En cas de violation de données présentant un risque pour les personnes concernées, nous notifierons la CNPD dans le délai légal applicable et, si nécessaire, les personnes concernées sans retard injustifié.",
 childrenTitle: "8. Mineurs",
 childrenBody: "Ce site n’est pas destiné aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles concernant des mineurs. Si nous apprenons qu’un mineur nous a transmis des données, nous les supprimerons dès que raisonnablement possible.",
 linksTitle: "9. Liens externes",
 linksBody: "Ce site contient des liens vers des sites externes, notamment InspectOS.pt et PropCheck.pt. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites. Veuillez consulter leurs politiques respectives.",
 changesTitle: "10. Modifications de cette politique",
 changesBody: "Nous pouvons mettre à jour cette politique. La date de dernière mise à jour figure en haut de cette page. En cas de modification substantielle, un avis visible sera publié sur le site.",
 contactTitle: "11. Contact",
 contactBody: "Pour toute question relative à cette politique ou au traitement de vos données : info@moldcheck.pt",
 },
 de: {
 title: "Datenschutzerklärung",
 eyebrow: "Datenschutz und rechtliche Transparenz",
 description: "Datenschutzerklärung von MoldCheck.pt nach DSGVO, portugiesischem Gesetz 58/2019 und Gesetz 41/2004, einschließlich Kontakt, Zahlungen, Newsletter, kostenlose Downloads und notwendige Cookies.",
 lastUpdated: "Letzte Aktualisierung: 10. März 2026",
 whoWeAreTitle: "1. Wer wir sind",
 whoWeAreBody: "MoldCheck.pt wird von der FAIRBANK Group betrieben (in dieser Erklärung als „wir“, „uns“ oder „Verantwortlicher“ bezeichnet).\n\nVerantwortlicher:\nFAIRBANK Group, Lda.\n[Eingetragene Adresse]\nLissabon, Portugal\nNIF: [Nummer]\nKontakt: info@moldcheck.pt\n\nMoldCheck.pt ist eine unabhängige redaktionelle Website zu Feuchtigkeit, Schimmel und Innenraumluftqualität. Die Website kann außerdem Buchungs- oder Zahlungsabläufe für Inspektionen, Laboranalysen oder digitale Ressourcen über Drittanbieter wie Stripe anbieten. Wir erheben keine Gesundheitsdaten aktiv.",
 whatDataTitle: "2. Welche Daten wir erheben",
 directDataTitle: "Daten, die Sie direkt bereitstellen",
 directDataBody: "Kontaktformular oder Anfragen per E-Mail:\n E-Mail-Adresse\n Name (optional)\n Inhalt der Nachricht\n\nZweck: Beantwortung Ihrer Nachricht.\nRechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).\nSpeicherung: 12 Monate nach der letzten Kommunikation, sofern keine längere gesetzliche Aufbewahrungspflicht besteht.\n\nNewsletter-Anmeldung:\n E-Mail-Adresse\n Bevorzugte Sprache\n Datum der Anmeldung\n\nZweck: Versand redaktioneller Updates zu Schimmel, Feuchtigkeit und Innenraumluftqualität in Portugal.\nRechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).\nSpeicherung: bis zur Abmeldung + 30 Tage für die technische Verarbeitung.\n\nDownload kostenloser Inhalte (PDF / Checkliste):\n E-Mail-Adresse\n\nZweck: Übermittlung des angeforderten Dokuments sowie automatische Aufnahme in die mit dieser heruntergeladenen Ressource verbundene E-Mail-Sequenz.\nRechtsgrundlage: Einwilligung und/oder Durchführung vorvertraglicher oder vertraglicher Maßnahmen, je nach Fall.\n\nKäufe, Buchungen oder Zahlungen (sofern zutreffend):\n Name\n E-Mail-Adresse\n Daten, die zur Durchführung der Buchung oder des Kaufs erforderlich sind\n Begrenzte Transaktionsinformationen\n\nZahlungen werden über Drittanbieter wie Stripe abgewickelt. MoldCheck.pt speichert keine vollständigen Zahlungskartendaten.",
 automaticDataTitle: "Automatisch erhobene Daten",
 automaticDataBody: "Traffic-Analyse (Plausible Analytics):\nMoldCheck.pt verwendet Plausible Analytics, ein Analysewerkzeug, das keine Cookies verwendet, keine personenbezogenen identifizierbaren Daten erhebt und keine Nutzerprofile erstellt.\n\nDie erhobenen Daten können umfassen: besuchte Seiten, ungefähres Land, Referrer-URL und Gerätetyp. Keine dieser Daten ist persönlich identifizierbar.\n\nPlausible erfordert keine Einwilligung nach DSGVO oder dem portugiesischen Gesetz 41/2004, da keine identifizierbaren personenbezogenen Daten verarbeitet werden.\n\nNotwendige Cookies:\n Cookie zur Sprachpräferenz: speichert die vom Nutzer gewählte Sprache. Dauer: 365 Tage. Keine Einwilligung erforderlich.\n Session-Cookie: technische Sitzungsverwaltung. Dauer: Sitzung. Keine Einwilligung erforderlich.\n\nWir verwenden keine Werbe-Cookies, keine Tracking-Cookies Dritter, keine Social-Media-Pixel und keine Analysewerkzeuge, die ohne Einwilligung personenbezogene Daten erheben.",
 sharingTitle: "3. Weitergabe von Daten an Dritte",
 sharingBody: "Wir verkaufen, vermieten oder überlassen Ihre personenbezogenen Daten nicht zu Marketingzwecken an Dritte.\n\nIhre Daten können weitergegeben werden an:\n\nTechnische Dienstleister (Auftragsverarbeiter gemäß Art. 28 DSGVO), wie z. B.:\n\nHosting-Anbieter der Website\n\nE-Mail- / Newsletter-Plattform\n\nPlausible Analytics\n\nStripe oder andere Zahlungsdienstleister\n\nandere Anbieter, die für Buchungen, Downloads oder Formulare technisch erforderlich sind\n\nBehörden: Wir legen personenbezogene Daten gegenüber zuständigen Behörden offen, wenn wir gesetzlich dazu verpflichtet sind (Art. 6 Abs. 1 lit. c DSGVO).",
 transfersTitle: "4. Internationale Datenübermittlungen",
 transfersBody: "Personenbezogene Daten werden vorzugsweise innerhalb der Europäischen Union verarbeitet. Wenn ein Dienstleister Daten außerhalb der EU/des EWR verarbeitet, stellen wir sicher, dass entweder:\n\nein Angemessenheitsbeschluss der Europäischen Kommission vorliegt, oder\n\nStandardvertragsklauseln (SCC) der Europäischen Kommission verwendet werden.",
 rightsTitle: "5. Ihre Rechte",
 rightsBody: "Nach DSGVO und dem portugiesischen Gesetz 58/2019 haben Sie folgende Rechte:\n\nRecht auf Auskunft\n\nRecht auf Berichtigung\n\nRecht auf Löschung\n\nRecht auf Einschränkung der Verarbeitung\n\nRecht auf Datenübertragbarkeit\n\nRecht auf Widerspruch\n\nRecht auf Widerruf Ihrer Einwilligung jederzeit\n\nZur Ausübung dieser Rechte: info@moldcheck.pt\n\nWir antworten innerhalb von 30 Tagen. In komplexen Fällen kann diese Frist auf 60 Tage verlängert werden; darüber werden Sie informiert.",
 complaintTitle: "6. Beschwerderecht bei der Aufsichtsbehörde",
 complaintBody: "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt, haben Sie das Recht, eine Beschwerde einzureichen bei:\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lissabon\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nSie können sich gegebenenfalls auch an die Datenschutzaufsichtsbehörde Ihres Wohnsitzlandes wenden.",
 securityTitle: "7. Sicherheit",
 securityBody: "Wir setzen angemessene technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor unbefugtem Zugriff, Offenlegung, Veränderung oder Zerstörung zu schützen, einschließlich verschlüsselter Übertragung (HTTPS/TLS), Zugangskontrollen und regelmäßiger Backups.\n\nKein System ist absolut sicher. Im Falle einer Datenschutzverletzung mit Risiko für Betroffene werden wir die CNPD innerhalb der gesetzlich vorgeschriebenen Frist benachrichtigen und, sofern erforderlich, die betroffenen Personen ohne unangemessene Verzögerung informieren.",
 childrenTitle: "8. Kinder",
 childrenBody: "Diese Website richtet sich nicht an Personen unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Minderjährigen. Wenn wir erfahren, dass uns ein Minderjähriger Daten übermittelt hat, werden wir diese so bald wie vernünftigerweise möglich löschen.",
 linksTitle: "9. Externe Links",
 linksBody: "Diese Website enthält Links zu externen Websites, darunter InspectOS.pt und PropCheck.pt. Wir sind nicht für die Datenschutzpraktiken dieser Websites verantwortlich. Bitte lesen Sie deren jeweilige Datenschutzerklärungen.",
 changesTitle: "10. Änderungen dieser Erklärung",
 changesBody: "Wir können diese Erklärung aktualisieren. Das Datum der letzten Aktualisierung ist oben auf dieser Seite angegeben. Bei wesentlichen Änderungen veröffentlichen wir einen sichtbaren Hinweis auf der Website.",
 contactTitle: "11. Kontakt",
 contactBody: "Bei Fragen zu dieser Erklärung oder zur Verarbeitung Ihrer Daten: info@moldcheck.pt",
 },
 nl: {
 title: "Privacybeleid",
 eyebrow: "Privacy en gegevensbescherming",
 description: "Privacybeleid van MoldCheck.pt onder de AVG, Portugese wet 58/2019 en wet 41/2004, inclusief contact, betalingen, nieuwsbrief, gratis downloads en noodzakelijke cookies.",
 lastUpdated: "Laatste bijwerking: 10 maart 2026",
 whoWeAreTitle: "1. Wie we zijn",
 whoWeAreBody: "MoldCheck.pt wordt beheerd door de FAIRBANK Group (hierna aangeduid als “wij”, “ons” of “de verwerkingsverantwoordelijke”).\n\nVerwerkingsverantwoordelijke:\nFAIRBANK Group, Lda.\n[Geregistreerd adres]\nLissabon, Portugal\nNIF: [nummer]\nContact: info@moldcheck.pt\n\nMoldCheck.pt is een onafhankelijke redactionele website over vocht, schimmel en binnenluchtkwaliteit. De site kan ook boekings- of betaalstromen aanbieden voor inspecties, laboratoriumanalyses of digitale middelen via externe betalingsverwerkers zoals Stripe. Wij verzamelen niet actief gezondheidsgegevens.",
 whatDataTitle: "2. Welke gegevens we verzamelen",
 directDataTitle: "Gegevens die je rechtstreeks verstrekt",
 directDataBody: "Contactformulier of contact per e-mail:\n E-mailadres\n Naam (optioneel)\n Inhoud van het bericht\n\nDoel: beantwoorden van je bericht.\nRechtsgrondslag: toestemming (art. 6 lid 1 sub a AVG).\nBewaring: 12 maanden na de laatste communicatie, tenzij een langere wettelijke bewaarplicht geldt.\n\nNieuwsbriefinschrijving:\n E-mailadres\n Voorkeurstaal\n Datum van inschrijving\n\nDoel: het versturen van redactionele updates over schimmel, vocht en binnenluchtkwaliteit in Portugal.\nRechtsgrondslag: toestemming (art. 6 lid 1 sub a AVG).\nBewaring: tot uitschrijving + 30 dagen voor technische verwerking.\n\nDownload van gratis inhoud (PDF / checklist):\n E-mailadres\n\nDoel: levering van het aangevraagde document en automatische opname van de gebruiker in de e-mailreeks die bij die gedownloade bron hoort.\nRechtsgrondslag: toestemming en/of uitvoering van precontractuele of contractuele stappen, afhankelijk van het geval.\n\nAankopen, boekingen of betalingen (indien van toepassing):\n Naam\n E-mailadres\n Gegevens die nodig zijn om de boeking of aankoop uit te voeren\n Beperkte transactie-informatie\n\nBetalingen worden verwerkt door externe betalingsaanbieders zoals Stripe. MoldCheck.pt slaat geen volledige kaartgegevens op.",
 automaticDataTitle: "Automatisch verzamelde gegevens",
 automaticDataBody: "Verkeersanalyse (Plausible Analytics):\nMoldCheck.pt gebruikt Plausible Analytics, een analysetool die geen cookies gebruikt, geen persoonlijk identificeerbare gegevens verzamelt en geen gebruikersprofielen opbouwt.\n\nDe verzamelde gegevens kunnen omvatten: bezochte pagina’s, benaderd land, referrer-URL en apparaattype. Geen van deze gegevens is persoonlijk identificeerbaar.\n\nPlausible vereist geen toestemming onder de AVG of de Portugese wet 41/2004, omdat het geen identificeerbare persoonsgegevens verwerkt.\n\nNoodzakelijke cookies:\n Cookie voor taalvoorkeur: slaat de door de gebruiker gekozen taal op. Duur: 365 dagen. Geen toestemming vereist.\n Sessiecookie: technisch sessiebeheer. Duur: sessie. Geen toestemming vereist.\n\nWij gebruiken geen advertentiecookies, geen trackingcookies van derden, geen social media-pixels en geen analysetools die zonder toestemming persoonsgegevens verzamelen.",
 sharingTitle: "3. Delen van gegevens met derden",
 sharingBody: "Wij verkopen, verhuren of verstrekken jouw persoonsgegevens niet aan derden voor marketingdoeleinden.\n\nJe gegevens kunnen worden gedeeld met:\n\nTechnische dienstverleners (verwerkers in de zin van art. 28 AVG), zoals:\n\nhostingprovider van de website\n\ne-mail- / nieuwsbriefplatform\n\nPlausible Analytics\n\nStripe of andere betalingsaanbieders\n\nandere leveranciers die strikt noodzakelijk zijn voor boekingen, downloads of formulieren\n\nWettelijke autoriteiten: wij verstrekken persoonsgegevens aan bevoegde autoriteiten indien wij daartoe wettelijk verplicht zijn (art. 6 lid 1 sub c AVG).",
 transfersTitle: "4. Internationale gegevensdoorgiften",
 transfersBody: "Persoonsgegevens worden bij voorkeur binnen de Europese Unie verwerkt. Als een dienstverlener gegevens buiten de EU/EER verwerkt, zorgen wij ervoor dat er:\n\neen adequaatheidsbesluit van de Europese Commissie is, of\n\nStandaard Contractuele Clausules (SCC’s) van de Europese Commissie van kracht zijn.",
 rightsTitle: "5. Jouw rechten",
 rightsBody: "Op grond van de AVG en de Portugese wet 58/2019 heb je de volgende rechten:\n\nrecht op inzage\n\nrecht op rectificatie\n\nrecht op wissing\n\nrecht op beperking van verwerking\n\nrecht op gegevensoverdraagbaarheid\n\nrecht van bezwaar\n\nrecht om toestemming op elk moment in te trekken\n\nOm een van deze rechten uit te oefenen: info@moldcheck.pt\n\nWij reageren binnen 30 dagen. In complexe gevallen kan deze termijn worden verlengd tot 60 dagen; je wordt dan daarvan op de hoogte gebracht.",
 complaintTitle: "6. Klacht indienen bij de toezichthouder",
 complaintBody: "Als je van mening bent dat de verwerking van jouw persoonsgegevens in strijd is met de AVG, heb je het recht een klacht in te dienen bij:\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lissabon\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nJe kunt indien van toepassing ook een klacht indienen bij de toezichthouder in jouw land van verblijf.",
 securityTitle: "7. Beveiliging",
 securityBody: "Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen ongeoorloofde toegang, openbaarmaking, wijziging of vernietiging, waaronder versleutelde overdracht (HTTPS/TLS), toegangscontrole en regelmatige back-ups.\n\nGeen enkel systeem is volledig veilig. In geval van een datalek met risico voor betrokkenen zullen wij de CNPD binnen de toepasselijke wettelijke termijn informeren en, indien nodig, de betrokken personen zonder onnodige vertraging waarschuwen.",
 childrenTitle: "8. Minderjarigen",
 childrenBody: "Deze website is niet gericht op personen jonger dan 16 jaar. Wij verzamelen niet bewust persoonsgegevens van minderjarigen. Als wij vernemen dat een minderjarige ons gegevens heeft verstrekt, zullen wij deze zo snel als redelijkerwijs mogelijk verwijderen.",
 linksTitle: "9. Externe links",
 linksBody: "Deze website bevat links naar externe websites, waaronder InspectOS.pt en PropCheck.pt. Wij zijn niet verantwoordelijk voor het privacybeleid van die websites. Raadpleeg hun respectieve privacyverklaringen.",
 changesTitle: "10. Wijzigingen in dit beleid",
 changesBody: "Wij kunnen dit beleid bijwerken. De datum van de laatste bijwerking staat bovenaan deze pagina. Bij wezenlijke wijzigingen publiceren wij een duidelijke kennisgeving op de website.",
 contactTitle: "11. Contact",
 contactBody: "Voor vragen over dit beleid of over de verwerking van jouw gegevens: info@moldcheck.pt",
 },
 it: {
 title: "Informativa sulla Privacy",
 eyebrow: "Privacy e protezione dei dati",
 description: "Informativa sulla privacy di MoldCheck.pt ai sensi del RGPD, della legge portoghese 58/2019 e della legge 41/2004, inclusi contatti, pagamenti, newsletter, download gratuiti e cookie necessari.",
 lastUpdated: "Ultimo aggiornamento: 10 marzo 2026",
 whoWeAreTitle: "1. Chi siamo",
 whoWeAreBody: "MoldCheck.pt è gestito dal FAIRBANK Group (di seguito denominato “noi”, “ci” o “titolare del trattamento”).\n\nTitolare del trattamento:\nFAIRBANK Group, Lda.\n[Indirizzo registrato]\nLisbona, Portogallo\nNIF: [numero]\nContatto: info@moldcheck.pt\n\nMoldCheck.pt è un sito editoriale indipendente dedicato a umidità, muffa e qualità dell’aria interna. Il sito può inoltre offrire flussi di prenotazione o pagamento per ispezioni, analisi di laboratorio o risorse digitali tramite fornitori di pagamento terzi come Stripe. Non raccogliamo attivamente dati sanitari.",
 whatDataTitle: "2. Quali dati raccogliamo",
 directDataTitle: "Dati forniti direttamente dall’utente",
 directDataBody: "Modulo di contatto o richieste via e-mail:\n Indirizzo e-mail\n Nome (facoltativo)\n Contenuto del messaggio\n\nFinalità: rispondere al messaggio inviato.\nBase giuridica: consenso (art. 6, par. 1, lett. a, RGPD).\nConservazione: 12 mesi dall’ultima comunicazione, salvo obblighi legali di conservazione più lunghi.\n\nIscrizione alla newsletter:\n Indirizzo e-mail\n Lingua preferita\n Data di iscrizione\n\nFinalità: invio di aggiornamenti editoriali su muffa, umidità e qualità dell’aria interna in Portogallo.\nBase giuridica: consenso (art. 6, par. 1, lett. a, RGPD).\nConservazione: fino alla cancellazione + 30 giorni per il trattamento tecnico.\n\nDownload di contenuti gratuiti (PDF / checklist):\n Indirizzo e-mail\n\nFinalità: invio del documento richiesto e inserimento automatico dell’utente nella sequenza email associata alla risorsa scaricata.\nBase giuridica: consenso e/o esecuzione di misure precontrattuali o contrattuali, a seconda del caso.\n\nAcquisti, prenotazioni o pagamenti (se applicabile):\n Nome\n Indirizzo e-mail\n Dati necessari per completare la prenotazione o l’acquisto\n Informazioni transazionali limitate\n\nI pagamenti sono elaborati da fornitori di pagamento terzi come Stripe. MoldCheck.pt non memorizza i dati completi della carta di pagamento.",
 automaticDataTitle: "Dati raccolti automaticamente",
 automaticDataBody: "Analisi del traffico (Plausible Analytics):\nMoldCheck.pt utilizza Plausible Analytics, uno strumento di analisi che non utilizza cookie, non raccoglie dati personali identificabili e non crea profili utente.\n\nI dati raccolti possono includere: pagine visitate, paese approssimativo, URL di provenienza e tipo di dispositivo. Nessuno di questi dati è personalmente identificabile.\n\nPlausible non richiede consenso ai sensi del RGPD o della legge portoghese 41/2004, poiché non tratta dati personali identificabili.\n\nCookie necessari:\n Cookie di preferenza della lingua: memorizza la lingua selezionata dall’utente. Durata: 365 giorni. Nessun consenso richiesto.\n Cookie di sessione: gestione tecnica della sessione. Durata: sessione. Nessun consenso richiesto.\n\nNon utilizziamo cookie pubblicitari, cookie di tracciamento di terze parti, pixel dei social media o strumenti di analisi che raccolgano dati personali senza consenso.",
 sharingTitle: "3. Condivisione dei dati con terzi",
 sharingBody: "Non vendiamo, affittiamo né cediamo i dati personali a terzi per finalità di marketing.\n\nI dati possono essere condivisi con:\n\nFornitori di servizi tecnici (responsabili del trattamento ai sensi dell’art. 28 RGPD), quali:\n\nfornitore di hosting del sito\n\npiattaforma e-mail / newsletter\n\nPlausible Analytics\n\nStripe o altri fornitori di pagamento\n\naltri fornitori strettamente necessari per prenotazioni, download o moduli\n\nAutorità competenti: comunicheremo dati personali alle autorità competenti se legalmente obbligati a farlo (art. 6, par. 1, lett. c, RGPD).",
 transfersTitle: "4. Trasferimenti internazionali di dati",
 transfersBody: "I dati personali sono trattati preferibilmente all’interno dell’Unione europea. Se un fornitore di servizi tratta dati al di fuori dell’UE/SEE, ci assicuriamo che esista:\n\nuna decisione di adeguatezza della Commissione europea, oppure\n\nClausole Contrattuali Standard (SCC) approvate dalla Commissione europea.",
 rightsTitle: "5. I vostri diritti",
 rightsBody: "Ai sensi del RGPD e della legge portoghese 58/2019, avete i seguenti diritti:\n\ndiritto di accesso\n\ndiritto di rettifica\n\ndiritto alla cancellazione\n\ndiritto alla limitazione del trattamento\n\ndiritto alla portabilità dei dati\n\ndiritto di opposizione\n\ndiritto di revocare il consenso in qualsiasi momento\n\nPer esercitare uno di questi diritti: info@moldcheck.pt\n\nRisponderemo entro 30 giorni. Nei casi complessi, il termine può essere esteso fino a 60 giorni, e ne daremo comunicazione.",
 complaintTitle: "6. Reclamo all’autorità di controllo",
 complaintBody: "Se ritenete che il trattamento dei vostri dati personali violi il RGPD, avete il diritto di presentare reclamo a:\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisbona\nPortogallo\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nPotete inoltre presentare reclamo presso l’autorità di controllo del vostro paese di residenza, ove applicabile.",
 securityTitle: "7. Sicurezza",
 securityBody: "Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, divulgazione, alterazione o distruzione, inclusi trasmissione cifrata (HTTPS/TLS), controlli di accesso e backup regolari.\n\nNessun sistema è completamente sicuro. In caso di violazione dei dati con rischio per gli interessati, notificheremo la CNPD entro il termine legale applicabile e, se necessario, gli interessati senza ritardo ingiustificato.",
 childrenTitle: "8. Minori",
 childrenBody: "Questo sito non è destinato a persone di età inferiore ai 16 anni. Non raccogliamo consapevolmente dati personali di minori. Se veniamo a conoscenza del fatto che un minore ci ha fornito dati, li elimineremo non appena ragionevolmente possibile.",
 linksTitle: "9. Link esterni",
 linksBody: "Questo sito contiene collegamenti a siti esterni, tra cui InspectOS.pt e PropCheck.pt. Non siamo responsabili delle pratiche sulla privacy di tali siti. Si invita a consultare le rispettive informative.",
 changesTitle: "10. Modifiche alla presente informativa",
 changesBody: "Potremmo aggiornare questa informativa. La data dell’ultimo aggiornamento è indicata nella parte superiore di questa pagina. In caso di modifiche sostanziali, pubblicheremo un avviso visibile sul sito.",
 contactTitle: "11. Contatto",
 contactBody: "Per qualsiasi domanda relativa a questa informativa o al trattamento dei vostri dati: info@moldcheck.pt",
 },
 es: {
 title: "Política de Privacidad",
 eyebrow: "Privacidad y protección de datos",
 description: "Política de privacidad de MoldCheck.pt conforme al RGPD, la Ley portuguesa 58/2019 y la Ley 41/2004, incluyendo contacto, pagos, newsletter, descargas gratuitas y cookies necesarias.",
 lastUpdated: "Última actualización: 10 de marzo de 2026",
 whoWeAreTitle: "1. Quiénes somos",
 whoWeAreBody: "MoldCheck.pt está gestionado por FAIRBANK Group (en adelante, “nosotros”, “nos” o “el responsable del tratamiento”).\n\nResponsable del tratamiento:\nFAIRBANK Group, Lda.\n[Dirección registrada]\nLisboa, Portugal\nNIF: [número]\nContacto: info@moldcheck.pt\n\nMoldCheck.pt es un sitio editorial independiente dedicado a la humedad, el moho y la calidad del aire interior. El sitio también puede ofrecer flujos de reserva o pago para inspecciones, análisis de laboratorio o recursos digitales a través de proveedores de pago externos como Stripe. No recopilamos activamente datos de salud.",
 whatDataTitle: "2. Qué datos recopilamos",
 directDataTitle: "Datos que usted proporciona directamente",
 directDataBody: "Formulario de contacto o contacto por correo electrónico:\n Dirección de correo electrónico\n Nombre (opcional)\n Contenido del mensaje\n\nFinalidad: responder a su mensaje.\nBase jurídica: consentimiento (artículo 6.1.a del RGPD).\nConservación: 12 meses desde la última comunicación, salvo obligación legal de conservación más prolongada.\n\nSuscripción a la newsletter:\n Dirección de correo electrónico\n Idioma preferido\n Fecha de suscripción\n\nFinalidad: envío de actualizaciones editoriales sobre moho, humedad y calidad del aire interior en Portugal.\nBase jurídica: consentimiento (artículo 6.1.a del RGPD).\nConservación: hasta la baja + 30 días para procesamiento técnico.\n\nDescarga de contenido gratuito (PDF / checklist):\n Dirección de correo electrónico\n\nFinalidad: envío del documento solicitado y entrada automática del usuario en la secuencia de emails asociada al recurso descargado.\nBase jurídica: consentimiento y/o ejecución de medidas precontractuales o contractuales, según corresponda.\n\nCompras, reservas o pagos (cuando proceda):\n Nombre\n Dirección de correo electrónico\n Datos necesarios para completar la reserva o compra\n Información transaccional limitada\n\nLos pagos son procesados por proveedores de pago externos, como Stripe. MoldCheck.pt no almacena los datos completos de la tarjeta de pago.",
 automaticDataTitle: "Datos recopilados automáticamente",
 automaticDataBody: "Análisis de tráfico (Plausible Analytics):\nMoldCheck.pt utiliza Plausible Analytics, una herramienta de análisis que no utiliza cookies, no recopila datos personales identificables y no crea perfiles de usuario.\n\nLos datos recopilados pueden incluir: páginas visitadas, país aproximado, URL de procedencia y tipo de dispositivo. Ninguno de estos datos es personalmente identificable.\n\nPlausible no requiere consentimiento al amparo del RGPD o de la Ley portuguesa 41/2004, ya que no procesa datos personales identificables.\n\nCookies necesarias:\n Cookie de preferencia de idioma: almacena el idioma seleccionado por el usuario. Duración: 365 días. No requiere consentimiento.\n Cookie de sesión: gestión técnica de sesión. Duración: sesión. No requiere consentimiento.\n\nNo utilizamos cookies publicitarias, cookies de seguimiento de terceros, píxeles de redes sociales ni herramientas de análisis que recopilen datos personales sin consentimiento.",
 sharingTitle: "3. Compartición de datos con terceros",
 sharingBody: "No vendemos, alquilamos ni cedemos sus datos personales a terceros con fines de marketing.\n\nSus datos pueden compartirse con:\n\nProveedores de servicios técnicos (encargados del tratamiento en el sentido del artículo 28 del RGPD), tales como:\n\nproveedor de alojamiento del sitio web\n\nplataforma de email / newsletter\n\nPlausible Analytics\n\nStripe u otros proveedores de pago\n\notros proveedores estrictamente necesarios para reservas, descargas o formularios\n\nAutoridades legales: divulgaremos datos personales a las autoridades competentes si estamos legalmente obligados a hacerlo (artículo 6.1.c del RGPD).",
 transfersTitle: "4. Transferencias internacionales de datos",
 transfersBody: "Los datos personales se tratan preferentemente dentro de la Unión Europea. Si un proveedor de servicios trata datos fuera de la UE/EEE, garantizamos que exista:\n\nuna decisión de adecuación de la Comisión Europea, o\n\nCláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea.",
 rightsTitle: "5. Sus derechos",
 rightsBody: "En virtud del RGPD y de la Ley portuguesa 58/2019, usted tiene los siguientes derechos:\n\nderecho de acceso\n\nderecho de rectificación\n\nderecho de supresión\n\nderecho a la limitación del tratamiento\n\nderecho a la portabilidad de los datos\n\nderecho de oposición\n\nderecho a retirar el consentimiento en cualquier momento\n\nPara ejercer cualquiera de estos derechos: info@moldcheck.pt\n\nResponderemos en un plazo de 30 días. En casos complejos, este plazo podrá ampliarse hasta 60 días, informándole de dicha ampliación.",
 complaintTitle: "6. Reclamación ante la autoridad de control",
 complaintBody: "Si considera que el tratamiento de sus datos personales vulnera el RGPD, tiene derecho a presentar una reclamación ante:\n\nCNPD Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisboa\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nTambién puede presentar una reclamación ante la autoridad de control de su país de residencia, cuando proceda.",
 securityTitle: "7. Seguridad",
 securityBody: "Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos personales frente a accesos no autorizados, divulgación, alteración o destrucción, incluyendo transmisión cifrada (HTTPS/TLS), controles de acceso y copias de seguridad periódicas.\n\nNingún sistema es completamente seguro. En caso de violación de datos con riesgo para los interesados, notificaremos a la CNPD dentro del plazo legal aplicable y, cuando sea necesario, a las personas afectadas sin demora indebida.",
 childrenTitle: "8. Menores",
 childrenBody: "Este sitio web no está dirigido a personas menores de 16 años. No recopilamos conscientemente datos personales de menores. Si llegamos a tener conocimiento de que un menor nos ha facilitado datos, los eliminaremos tan pronto como sea razonablemente posible.",
 linksTitle: "9. Enlaces externos",
 linksBody: "Este sitio web contiene enlaces a sitios externos, incluidos InspectOS.pt y PropCheck.pt. No somos responsables de las prácticas de privacidad de dichos sitios. Le recomendamos consultar sus respectivas políticas de privacidad.",
 changesTitle: "10. Cambios en esta política",
 changesBody: "Podemos actualizar esta política. La fecha de la última actualización figura en la parte superior de esta página. En caso de cambios sustanciales, publicaremos un aviso visible en el sitio web.",
 contactTitle: "11. Contacto",
 contactBody: "Para cualquier cuestión sobre esta política o sobre el tratamiento de sus datos: info@moldcheck.pt",
 },
};

export function getPrivacyFallbackContent(locale: ActiveLocale): GlobalPageContent {
 const content = privacyContentByLocale[locale];

 return {
 pageKey: "privacy",
 language: locale,
 translationGroup: "privacy",
 title: content.title,
 eyebrow: content.eyebrow,
 description: content.description,
 body: [paragraphBlock(content.lastUpdated, `privacy-last-updated-${locale}`)],
 introLayout: "utility",
 introCards: [
 {
 eyebrow: "1",
 title: content.whoWeAreTitle,
 body: content.whoWeAreBody,
 tone: "featured",
 },
 ],
 sections: buildSections(content),
 };
}

