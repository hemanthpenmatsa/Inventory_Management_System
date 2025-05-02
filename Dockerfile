FROM jenkins/jenkins:lts

USER root

RUN apt-get update && apt-get install -y \
    coreutils \
    curl \
    git \
    sudo

RUN curl -fsSL https://get.docker.com -o get-docker.sh && \
    sh get-docker.sh && \
    rm get-docker.sh

RUN groupadd -f docker && usermod -aG docker jenkins

USER jenkins

# Expose default Jenkins ports
EXPOSE 8080 50000

# Define volumes for persistent storage
VOLUME /var/jenkins_home

# Set environment variables for better Jenkins configuration
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false -Xmx2g" \
    CASC_JENKINS_CONFIG="/var/jenkins_home/casc_configs" \
    JENKINS_OPTS="--httpPort=8080 --prefix=/jenkins"



