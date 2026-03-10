import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Dream Nova Consult',
  description: 'Politique de confidentialité et protection des données de Dream Nova Consult.',
}

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition mb-8">
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl mb-8">Politique de Confidentialité</h1>

        <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">1. Responsable du traitement</h2>
            <p>
              <strong>Dream Nova Consult</strong><br />
              Responsable : David Dream Nova<br />
              Email : dreamnovaultimate@gmail.com<br />
              Adresse : Jérusalem, Israël
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">2. Données collectées</h2>
            <p>Nous pouvons collecter les données suivantes :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l&apos;entreprise</li>
              <li>Données de navigation (cookies techniques)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Répondre à vos demandes de contact</li>
              <li>Établir des devis et contrats</li>
              <li>Fournir nos services de conseil et développement</li>
              <li>Envoyer des communications marketing (avec votre consentement)</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">4. Base légale</h2>
            <p>
              Le traitement de vos données est fondé sur : l&apos;exécution d&apos;un contrat, votre consentement, ou notre intérêt légitime à développer notre activité commerciale.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant la durée de la relation commerciale et jusqu&apos;à 3 ans après le dernier contact pour les prospects. Les données de facturation sont conservées conformément aux obligations légales (10 ans).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Rectification</strong> : corriger vos données</li>
              <li><strong>Suppression</strong> : demander l&apos;effacement de vos données</li>
              <li><strong>Opposition</strong> : vous opposer au traitement</li>
              <li><strong>Portabilité</strong> : recevoir vos données dans un format structuré</li>
            </ul>
            <p className="mt-2">
              Pour exercer vos droits : <a href="mailto:dreamnovaultimate@gmail.com" className="text-[var(--color-gold)] hover:underline">dreamnovaultimate@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">7. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de suivi n&apos;est utilisé.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">8. Transferts de données</h2>
            <p>
              Vos données peuvent être hébergées sur des serveurs situés en dehors de l&apos;UE (Vercel, États-Unis). Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--color-text-primary)] mb-3">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
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
