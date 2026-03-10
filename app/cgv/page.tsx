import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — Dream Nova Consult',
  description: 'Conditions générales de vente des services de Dream Nova Consult.',
}

export default function CGV() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition mb-8">
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl mb-8">Conditions Générales de Vente</h1>

        <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">1. Objet</h2>
            <p>
              Les présentes conditions générales de vente régissent les relations contractuelles entre Dream Nova Consult et ses clients pour la fourniture de services de conseil en intelligence artificielle, développement web et automatisation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">2. Services proposés</h2>
            <p>Dream Nova Consult propose les prestations suivantes :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Consulting et audit IA pour entreprises</li>
              <li>Développement de sites web et applications</li>
              <li>Formation en intelligence artificielle</li>
              <li>Marketing digital et création de contenu</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">3. Tarifs</h2>
            <p>Les tarifs sont indiqués en euros (EUR) hors taxes et sont susceptibles de modification. Les forfaits mensuels proposés sont :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Solo</strong> : 490 &euro;/mois</li>
              <li><strong>Starter</strong> : 2 300 &euro;/mois</li>
              <li><strong>Growth</strong> : 5 400 &euro;/mois</li>
              <li><strong>Enterprise</strong> : 13 800 &euro;/mois</li>
            </ul>
            <p className="mt-2">Un devis détaillé est fourni avant toute prestation.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">4. Modalités de paiement</h2>
            <p>Le paiement s&apos;effectue selon les modalités convenues dans le devis :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Acompte de 30% à la signature du devis</li>
              <li>Solde à la livraison du projet</li>
              <li>Paiement par virement bancaire ou carte bancaire</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">5. Délais de réalisation</h2>
            <p>
              Les délais de réalisation sont communiqués à titre indicatif dans le devis. Dream Nova Consult s&apos;engage à respecter les délais convenus dans la mesure du possible. Tout retard ne donnera lieu à aucune pénalité sauf disposition contractuelle spécifique.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">6. Propriété intellectuelle</h2>
            <p>
              Sauf mention contraire dans le devis, les droits de propriété intellectuelle sur les livrables sont transférés au client après paiement intégral. Dream Nova Consult se réserve le droit d&apos;utiliser les projets réalisés à des fins de portfolio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">7. Résiliation</h2>
            <p>
              Chaque partie peut résilier le contrat en cas de manquement grave de l&apos;autre partie à ses obligations, après mise en demeure restée infructueuse pendant 15 jours. En cas de résiliation par le client, les sommes déjà versées restent acquises à Dream Nova Consult au prorata du travail effectué.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">8. Responsabilité</h2>
            <p>
              La responsabilité de Dream Nova Consult est limitée au montant des sommes effectivement perçues au titre du contrat concerné. Dream Nova Consult ne saurait être tenue responsable des dommages indirects.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">9. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit israélien. Tout litige sera de la compétence exclusive des tribunaux de Jérusalem.
            </p>
          </section>
        </div>

        <p className="text-xs text-[var(--color-text-muted)] mt-12">
          Dernière mise à jour : Février 2026
        </p>
      </div>
    </div>
  )
}
