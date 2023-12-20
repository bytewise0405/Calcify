// React Native's Component Imports
import {
  Text,
  View,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// App's Internal Imports
import { Footer } from "../../../components";
import get_computed_style from "../../../../assets/styles/legal/terms_of_service";

// App's External Imports
import { useTheme } from "@react-navigation/native";

const TermsOfService = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.term}>
        <Text style={styles.term_title}>Terms of Service</Text>
        <Text style={styles.term_content}>
          Last updated: January 01, 2024{"\n"}Please read these terms of service
          carefully before using Our Service.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Interpretation and Definitions</Text>
        <Text style={styles.term_content}>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.{"\n"}
          {"\n"}For the purposes of these term and Conditions: Application means
          the software program provided by the Company downloaded by You on any
          electronic device, named Calcify Application Store means the digital
          distribution service operated and developed by Apple Inc. (Apple App
          Store) or Google Inc. (Google Play Store) in which the Application has
          been downloaded. Affiliate means an entity that controls, is
          controlled by or is under common control with a party, where "control"
          means ownership of 50% or more of the shares, equity interest or other
          securities entitled to vote for election of directors or other
          managing authority. Country refers to: Maharashtra, India Company
          (referred to as either "the Company", "We", "Us" or "Our" in this
          Agreement) refers to Calcify. Device means any device that can access
          the Service such as a computer, a cellphone or a digital tablet.
          Service refers to the Application. term and Conditions (also referred
          as "term") mean these term and Conditions that form the entire
          agreement between You and the Company regarding the use of the
          Service. This term and Conditions agreement has been created with the
          help of the term and Conditions Generator. Third-party Social Media
          Service means any services or content (including data, information,
          products or services) provided by a third-party that may be displayed,
          included or made available by the Service. You means the individual
          accessing or using the Service, or the company, or other legal entity
          on behalf of which such individual is accessing or using the Service,
          as applicable.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Acknowledgment</Text>
        <Text style={styles.term_content}>
          These are the term and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          term and Conditions set out the rights and obligations of all users
          regarding the use of the Service. Your access to and use of the
          Service is conditioned on Your acceptance of and compliance with these
          term and Conditions. These term and Conditions apply to all visitors,
          users and others who access or use the Service. By accessing or using
          the Service You agree to be bound by these term and Conditions. If You
          disagree with any part of these term and Conditions then You may not
          access the Service. You represent that you are over the age of 18. The
          Company does not permit those under 18 to use the Service. Your access
          to and use of the Service is also conditioned on Your acceptance of
          and compliance with the Privacy Policy of the Company. Our Privacy
          Policy describes Our policies and procedures on the collection, use
          and disclosure of Your personal information when You use the
          Application or the Website and tells You about Your privacy rights and
          how the law protects You. Please read Our Privacy Policy carefully
          before using Our Service.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Links to Other Websites</Text>
        <Text style={styles.term_content}>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company. The Company has no
          control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You
          further acknowledge and agree that the Company shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with the use of or
          reliance on any such content, goods or services available on or
          through any such web sites or services. We strongly advise You to read
          the term and conditions and privacy policies of any third-party web
          sites or services that You visit.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Termination</Text>
        <Text style={styles.term_content}>
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these term and Conditions. Upon termination,
          Your right to use the Service will cease immediately.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Limitation of Liability</Text>
        <Text style={styles.term_content}>
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          term and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.{"\n"}
          {"\n"}To the maximum extent permitted by applicable law, in no event
          shall the Company or its suppliers be liable for any special,
          incidental, indirect, or consequential damages whatsoever (including,
          but not limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this term), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose.{"\n"}
          {"\n"}Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party's liability will be limited to the greatest extent
          permitted by law.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>
          "AS IS" and "AS AVAILABLE" Disclaimer
        </Text>
        <Text style={styles.term_content}>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
          faults and defects without warranty of any kind. To the maximum extent
          permitted under applicable law, the Company, on its own behalf and on
          behalf of its Affiliates and its and their respective licensors and
          service providers, expressly disclaims all warranties, whether
          express, implied, statutory or otherwise, with respect to the Service,
          including all implied warranties of merchantability, fitness for a
          particular purpose, title and non-infringement, and warranties that
          may arise out of course of dealing, course of performance, usage or
          trade practice. Without limitation to the foregoing, the Company
          provides no warranty or undertaking, and makes no representation of
          any kind that the Service will meet Your requirements, achieve any
          intended results, be compatible or work with any other software,
          applications, systems or services, operate without interruption, meet
          any performance or reliability standards or be error free or that any
          errors or defects can or will be corrected.{"\n"}
          {"\n"}Without limiting the foregoing, neither the Company nor any of
          the company's provider makes any representation or warranty of any
          kind, express or implied: (i) as to the operation or availability of
          the Service, or the information, content, and materials or products
          included thereon; (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability, or currency of any
          information or content provided through the Service; or (iv) that the
          Service, its servers, the content, or e-mails sent from or on behalf
          of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.{"\n"}
          {"\n"}Some jurisdictions do not allow the exclusion of certain types
          of warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Governing Law</Text>
        <Text style={styles.term_content}>
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this term and Your use of the Service. Your use of the
          Application may also be subject to other local, state, national, or
          international laws.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Disputes Resolution</Text>
        <Text style={styles.term_content}>
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>For European Union (EU) Users</Text>
        <Text style={styles.term_content}>
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which you are
          resident in.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>United States Legal Compliance</Text>
        <Text style={styles.term_content}>
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo, or that has
          been designated by the United States government as a "terrorist
          supporting" country, and (ii) You are not listed on any United States
          government list of prohibited or restricted parties.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Severability</Text>
        <Text style={styles.term_content}>
          If any provision of these term is held to be unenforceable or invalid,
          such provision will be changed and interpreted to accomplish the
          objectives of such provision to the greatest extent possible under
          applicable law and the remaining provisions will continue in full
          force and effect.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Waiver</Text>
        <Text style={styles.term_content}>
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation under these term shall not effect
          a party's ability to exercise such right or require such performance
          at any time thereafter nor shall the waiver of a breach constitute a
          waiver of any subsequent breach.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Translation Interpretation</Text>
        <Text style={styles.term_content}>
          These term and Conditions may have been translated if We have made
          them available to You on our Service. You agree that the original
          English text shall prevail in the case of a dispute.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>
          Changes to These term and Conditions
        </Text>
        <Text style={styles.term_content}>
          We reserve the right, at Our sole discretion, to modify or replace
          these term at any time. If a revision is material We will make
          reasonable efforts to provide at least 30 days' notice prior to any
          new term taking effect. What constitutes a material change will be
          determined at Our sole discretion.{"\n"}
          {"\n"}
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised term. If You do
          not agree to the new term, in whole or in part, please stop using the
          website and the Service.
        </Text>
      </View>

      <View style={styles.term}>
        <Text style={styles.term_title}>Contact Us</Text>
        <Text style={styles.term_content}>
          If you have any questions about these term and Conditions, You can
          contact us:{"\n"}
          {"\n"}
          By email:
          {"\n"}
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL("mailto:support@bytewise.ml");
            }}
          >
            <Text style={styles.external_url}>support@bytewise.ml</Text>
          </TouchableOpacity>
          {"\n"}
          By visiting this page on our website:{"\n"}
          <TouchableOpacity
            onPress={async () => {
              await Linking.openURL("https://www.bytewise.ml/#contact");
            }}
          >
            <Text style={styles.external_url}>
              https://www.bytewise.ml/#contact
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.footer_section}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default TermsOfService;
